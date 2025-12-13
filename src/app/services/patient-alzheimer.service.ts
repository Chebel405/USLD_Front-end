import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PatientAlzheimer } from "../models/patient-alzheimer.model";

@Injectable({
    providedIn: 'root'
})
export class PatientAlzheimerService {
    private apiUrl = 'http://localhost:8081/patients/alzheimer';

    constructor(private http: HttpClient) { }

    // Get all patients
    findAll(): Observable<PatientAlzheimer[]> {
        return this.http.get<PatientAlzheimer[]>(this.apiUrl);
    }

    // Get patient by ID
    findById(id: number): Observable<PatientAlzheimer> {
        return this.http.get<PatientAlzheimer>(`${this.apiUrl}/${id}`);
    }

    // Create new patient
    create(patient: PatientAlzheimer): Observable<PatientAlzheimer> {
        return this.http.post<PatientAlzheimer>(this.apiUrl, patient);
    }

    // Update existing patient
    update(id: number, patient: PatientAlzheimer): Observable<PatientAlzheimer> {
        return this.http.put<PatientAlzheimer>(`${this.apiUrl}/${id}`, patient);
    }

    // Delete patient
    delete(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
