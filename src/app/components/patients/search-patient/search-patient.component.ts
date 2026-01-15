import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PatientSearchService } from '../../../services/patient-search.service';
import { PatientRecherche } from '../../../models/patient-recherche.model';

type Critere = 'nom' | 'prenom';

@Component({
  selector: 'app-search-patient',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-patient.component.html',
  styleUrl: './search-patient.component.css',
})
export class SearchPatientComponent {
  critere: Critere = 'nom';
  valeur = '';

  patients: PatientRecherche[] = [];
  aDejaRecherche = false;

  constructor(private searchService: PatientSearchService) { }

  rechercher(): void {
    const v = (this.valeur || '').trim();
    if (!v) return;

    this.aDejaRecherche = true;
    this.patients = [];

    const body: PatientRecherche =
      this.critere === 'nom' ? { nom: v } : { prenom: v };

    this.searchService.search(body).subscribe({
      next: (res) => (this.patients = res),
      error: (err) => console.error(err),
    });
  }

  reset(): void {
    this.critere = 'nom';
    this.valeur = '';
    this.patients = [];
    this.aDejaRecherche = false;
  }

  getServiceLabel(p: PatientRecherche): string {
    const t = p.typePatient;
    if (t === 'USLD') return 'USLD';
    if (t === 'ALZHEIMER') return 'Alzheimer';
    if (t === 'SANS_SOIN') return 'Sans soin';
    return '—';
  }

}
