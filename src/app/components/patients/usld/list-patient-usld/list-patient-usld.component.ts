import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientUsldService } from '../../../../services/patient-usld.service';
import { PatientUSLD } from '../../../../models/patient-usld.model';

@Component({
  selector: 'app-list-patient-usld',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-patient-usld.component.html',
  styleUrls: ['./list-patient-usld.component.css']
})
export class ListPatientUsldComponent implements OnInit {
  patients: PatientUSLD[] = [];
  erreurChargement: string | null = null;

  constructor(private patientService: PatientUsldService) { }

  ngOnInit(): void {
    this.patientService.findAll().subscribe({
      next: (data) => this.patients = data,
      error: (err) => {
        console.error(err);
        this.erreurChargement = "Impossible de charger les patients USLD.";
      }
    });
  }
}