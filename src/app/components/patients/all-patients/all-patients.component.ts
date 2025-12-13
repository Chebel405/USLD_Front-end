import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PatientUSLD } from '../../../models/patient-usld.model';
import { PatientAlzheimer } from "../../../models/patient-alzheimer.model";
import { PatientUsldService } from '../../../services/patient-usld.service';
import { PatientAlzheimerService } from '../../../services/patient-alzheimer.service';
import { PatientSansSoin } from '../../../models/patient-sans-soin.model';
import { PatientSansSoinService } from '../../../services/patient-sanssoin.service';

@Component({
  selector: 'app-all-patients',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-patients.component.html',
  styleUrls: ['./all-patients.component.css']

})
export class AllPatientsComponent implements OnInit {
  patientsUSLD: PatientUSLD[] = [];
  patientsSansSoin: PatientSansSoin[] = [];
  patientsAlzheimer: PatientAlzheimer[] = [];

  constructor(
    private usldService: PatientUsldService,
    private sansSoinService: PatientSansSoinService,
    private alzheimerService: PatientAlzheimerService
  ) { }

  ngOnInit(): void {
    this.usldService.findAll().subscribe({
      next: (patients) => this.patientsUSLD = patients,
      error: (err) => console.error('Erreur chargement USLD', err)
    });

    this.sansSoinService.findAll().subscribe({
      next: (patients) => this.patientsSansSoin = patients,
      error: (err) => console.error('Erreur chargement Sans Soin', err)
    });

    this.alzheimerService.findAll().subscribe({
      next: (patients) => this.patientsAlzheimer = patients,
      error: (err) => console.error('Erreur chargement Alzheimer', err)
    });
  }


}
