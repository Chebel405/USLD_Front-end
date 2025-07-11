import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PatientSansSoin } from "../models/patient-sans-soin.model";

@Injectable({
    providedIn: 'root'
})

export class PatientSansSoinService {
    private apiUrl = 'http://localhost:8081/patients-sanssoin';

    constructor(private http: HttpClient) { }

    getAllPatientSansSoin(): Observable<PatientSansSoin[]> {
        return this.http.get<PatientSansSoin[]>(this.apiUrl);
    }

    getById(id: number): Observable<PatientSansSoin> {
        return this.http.get<PatientSansSoin>(`${this.apiUrl}/${id}`);
    }

    createPatientSansSoin(patient: PatientSansSoin): Observable<PatientSansSoin> {
        return this.http.post<PatientSansSoin>(this.apiUrl, patient);
    }

    updatePatientSansSoin(id: number, patient: PatientSansSoin): Observable<PatientSansSoin> {
        return this.http.put<PatientSansSoin>(`${this.apiUrl}/${id}`, patient);
    }

    deletePatientSansSoin(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }


}