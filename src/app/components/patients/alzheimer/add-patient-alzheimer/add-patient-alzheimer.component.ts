import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PatientAlzheimerService } from '../../../../services/patient-alzheimer.service';
import { PatientAlzheimer } from '../../../../models/patient-alzheimer.model';

@Component({
  selector: 'app-add-patient-alzheimer',
  templateUrl: './add-patient-alzheimer.component.html',
  styleUrls: ['./add-patient-alzheimer.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class AddPatientAlzheimerComponent {
  patientForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private patientService: PatientAlzheimerService
  ) {
    this.patientForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      dateNaissance: ['', Validators.required],
      numeroChambre: [null, Validators.required],
      niveauAutonomie: ['', Validators.required],
      toiletteAssistee: [false],
      aideHabillage: [false],
      aideRepas: [false],
      stadeMaladie: ['', Validators.required],
      suiviPsychologue: [false]
    });
  }

  onSubmit(): void {
    if (this.patientForm.valid) {
      const nouveauPatient: PatientAlzheimer = this.patientForm.value;
      this.patientService.createPatientAlzheimer(nouveauPatient).subscribe({
        next: (result) => {
          console.log('PAtient Azheimer ajouté avec succès', result);
          this.patientForm.reset();
        },
        error: (error) => {
          console.error('Erreur lors de l\ajout', error);
        }
      });
    }
  }

}
