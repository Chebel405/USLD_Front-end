import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientSansSoin } from '../../../../models/patient-sans-soin.model';
import { PatientSansSoinService } from '../../../../services/patient-sanssoin.service';

@Component({
  selector: 'app-list-patient-sans-soin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-patient-sans-soin.component.html',
  styleUrls: ['./list-patient-sans-soin.component.css']
})
export class ListPatientSansSoinComponent implements OnInit {
  patients: PatientSansSoin[] = [];
  erreurChargement: string | null = null;

  constructor(private patientService: PatientSansSoinService) { }

  ngOnInit(): void {
    this.chargerPatients();
  }

  chargerPatients(): void {
    this.patientService.findAll().subscribe({
      next: (data) => {
        this.patients = data;
      },
      error: (err) => {
        console.error(err);
        this.erreurChargement = "Impossible de charger les patients.";
      },
    });
  }
}
