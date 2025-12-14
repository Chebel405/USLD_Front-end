import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PatientAlzheimer } from '../../../../models/patient-alzheimer.model';
import { PatientAlzheimerService } from '../../../../services/patient-alzheimer.service';

@Component({
  selector: 'app-list-patient-alzheimer',
  templateUrl: './list-patient-alzheimer.component.html',
  styleUrls: ['./list-patient-alzheimer.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ListPatientAlzheimerComponent implements OnInit {
  patients: PatientAlzheimer[] = [];

  constructor(private alzheimerService: PatientAlzheimerService) { }

  ngOnInit(): void {
    this.alzheimerService.findAll().subscribe({
      next: (data) => this.patients = data,
      error: (err) => console.error('Erreur chargement Alzheimer', err)
    });
  }
}
