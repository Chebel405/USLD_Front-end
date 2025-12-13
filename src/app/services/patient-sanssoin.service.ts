import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PatientSansSoin } from "../models/patient-sans-soin.model";

@Injectable({
    providedIn: 'root'
})
export class PatientSansSoinService {
    private apiUrl = 'http://localhost:8081/patients/sanssoin';

    constructor(private http: HttpClient) { }

    // Get all patients
    findAll(): Observable<PatientSansSoin[]> {
        return this.http.get<PatientSansSoin[]>(this.apiUrl);
    }

    // Get by ID
    findById(id: number): Observable<PatientSansSoin> {
        return this.http.get<PatientSansSoin>(`${this.apiUrl}/${id}`);
    }

    // Create new patient
    create(patient: PatientSansSoin): Observable<PatientSansSoin> {
        return this.http.post<PatientSansSoin>(this.apiUrl, patient);
    }

    // Update patient
    update(id: number, patient: PatientSansSoin): Observable<PatientSansSoin> {
        return this.http.put<PatientSansSoin>(`${this.apiUrl}/${id}`, patient);
    }

    // Delete patient
    delete(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
