import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PatientAlzheimer } from "../models/patient-alzheimer.model";

@Injectable({
    providedIn: 'root'
})
export class PatientAlzheimerService {
    private apiUrl = 'http://localhost:8081/patients-alzheimer';

    constructor(private http: HttpClient) { }

    getAllPatientsAlzheimer(): Observable<PatientAlzheimer[]> {
        return this.http.get<PatientAlzheimer[]>(this.apiUrl);
    }

    getById(id: number): Observable<PatientAlzheimer> {
        return this.http.get<PatientAlzheimer>(`${this.apiUrl}/${id}`);
    }

    createPatientAlzheimer(patient: PatientAlzheimer): Observable<PatientAlzheimer> {
        return this.http.post<PatientAlzheimer>(this.apiUrl, patient);
    }

    updatePatientAlzheimer(id: number, patient: PatientAlzheimer): Observable<PatientAlzheimer> {
        return this.http.put<PatientAlzheimer>(`${this.apiUrl}/${id}`, patient);
    }

    deletePatientAlzheimer(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }


}
