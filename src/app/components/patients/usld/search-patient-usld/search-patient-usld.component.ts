import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PatientUsldService } from '../../../../services/patient-usld.service';
import { PatientUSLD } from '../../../../models/patient-usld.model';

type Critere = 'nom' | 'prenom' | 'dateNaissance' | 'numeroChambre' | 'autonomie';

@Component({
  selector: 'app-search-patient-usld',
  templateUrl: './search-patient-usld.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class SearchPatientUsldComponent implements OnInit {
  role: string = '';
  isAdmin: boolean = false;


  critere: Critere = 'nom';
  valeur: string = '';

  patients: PatientUSLD[] = [];
  aDejaRecherche = false;

  constructor(private patientService: PatientUsldService) { }

  ngOnInit(): void {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      this.role = payload.role;
      this.isAdmin = payload.role === 'ADMIN';
    }
  }

  rechercher(): void {
    const v = (this.valeur || '').trim();
    if (!v) return;

    this.aDejaRecherche = true;
    this.patients = [];

    const chambre = Number(v);

    const actions: Record<Critere, () => any> = {
      nom: () => this.patientService.findByNom(v),
      prenom: () => this.patientService.findByPrenom(v),
      dateNaissance: () => this.patientService.findByDateNaissance(v),
      numeroChambre: () => this.patientService.findByNumeroChambre(chambre),
      autonomie: () => this.patientService.findByAutonomie(v),
    };

    // garde-fou si critere = numeroChambre et pas un nombre
    if (this.critere === 'numeroChambre' && Number.isNaN(chambre)) {
      return;
    }

    actions[this.critere]().subscribe({
      next: (patients: PatientUSLD[]) => (this.patients = patients),
      error: (err: any) => console.error(err),
    });
  }


  reset(): void {
    this.critere = 'nom';
    this.valeur = '';
    this.patients = [];
    this.aDejaRecherche = false;
  }
}
