import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PatientUsldService } from '../../../../services/patient-usld.service';
import { PatientUSLD } from '../../../../models/patient-usld.model';


@Component({
  selector: 'app-add-patient-usld',
  templateUrl: './add-patient-usld.component.html',
  styleUrls: ['./add-patient-usld.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
})
export class AddPatientUsldComponent {
  patientForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private patientService: PatientUsldService
  ) {
    this.patientForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      dateNaissance: ['', Validators.required],
      numeroChambre: [null, Validators.required],
      niveauAutonomie: ['', Validators.required],
      toiletteAssistee: [false],
      aideHabillage: [false],
      aideRepas: [false]
    });
  }
  onSubmit(): void {
    if (this.patientForm.valid) {
      const nouveauPatient: PatientUSLD = this.patientForm.value;
      this.patientService.create(nouveauPatient).subscribe({
        next: (result) => {
          console.log('Patient ajouté avec succès', result);
          this.patientForm.reset();
        },
        error: (error) => {
          console.error('Erreur lors de l\'ajout', error);
        }
      });
    }
  }

}
