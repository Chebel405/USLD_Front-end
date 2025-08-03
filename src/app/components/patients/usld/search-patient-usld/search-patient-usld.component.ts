import { Component } from '@angular/core';
import { PatientUsldService } from '../../../../services/patient-usld.service';
import { PatientUSLD } from '../../../../models/patient-usld.model';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-search-patient-usld',
  templateUrl: './search-patient-usld.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
})
export class SearchPatientUsldComponent {
  nomRecherche = '';
  prenomRecherche = '';
  dateNaissanceRecherche = '';
  numeroChambreRecherche = '';
  autonomieRecherche = '';
  patients: PatientUSLD[] = [];

  constructor(private patientService: PatientUsldService) { }

  rechercherNom() {
    console.log("Recherche déclenchée par nom :", this.nomRecherche);
    this.patientService.rechercherParNom(this.nomRecherche).subscribe({
      next: (patients) => this.patients = patients,
      error: (err) => console.error(err)
    });
  }

  rechercherPrenom() {
    console.log("Recherche déclenchée par prénom :", this.prenomRecherche);
    this.patientService.rechercherParPrenom(this.prenomRecherche).subscribe({
      next: (patients) => this.patients = patients,
      error: (err) => console.error(err)
    });
  }

  rechercherDateNaissance() {
    console.log("Recherche déclenchée par date de naissance :", this.dateNaissanceRecherche);
    this.patientService.rechercherParDateNaissance(this.dateNaissanceRecherche).subscribe({
      next: (patients) => this.patients = patients,
      error: (err) => console.error(err)
    });
  }

  rechercherNumeroChambre() {
    console.log("Recherche déclenchée par numéros de chambre :", this.numeroChambreRecherche);
    this.patientService.rechercherParNumeroChambre(this.numeroChambreRecherche).subscribe({
      next: (patients) => this.patients = patients,
      error: (err) => console.error(err)
    });
  }

  rechercherAutonomie() {
    console.log("Recherche déclenchée par niveau d'autonomie :", this.autonomieRecherche);
    this.patientService.rechercherParAutonomie(this.autonomieRecherche).subscribe({
      next: (patients) => this.patients = patients,
      error: (err) => console.error(err)
    });
  }

}
