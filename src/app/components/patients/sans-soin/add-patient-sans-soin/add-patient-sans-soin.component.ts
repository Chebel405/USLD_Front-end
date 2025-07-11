import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PatientSansSoin } from '../../../../models/patient-sans-soin.model';
import { PatientSansSoinService } from '../../../../services/patient-sanssoin.service';

@Component({
  selector: 'app-add-patient-sans-soin',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-patient-sans-soin.component.html',
  styleUrl: './add-patient-sans-soin.component.css'
})
export class AddPatientSansSoinComponent {
  patientForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private patientService: PatientSansSoinService
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
      const nouveauPatient: PatientSansSoin = this.patientForm.value;
      this.patientService.createPatientSansSoin(nouveauPatient).subscribe({
        next: (result) => {
          console.log('Patient sans soin ajouté avec succès', result);
          this.patientForm.reset();
        },
        error: (error) => {
          console.error('Erreur lors de l\'ajout', error);
        }
      });
    }
  }

}
