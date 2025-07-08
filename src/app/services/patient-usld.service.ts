
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PatientUSLD } from '../models/patient-usld.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class PatientUsldService {
    private apiUrl = 'http://localhost:8081/patient/usld';

    constructor(private http: HttpClient) { }

    // Récuperer les patients
    getAll(): Observable<PatientUSLD[]> {
        return this.http.get<PatientUSLD[]>(this.apiUrl);
    }

    // Récuperer un patient ac ID
    getById(id: number): Observable<PatientUSLD> {
        return this.http.get<PatientUSLD>(`${this.apiUrl}/${id}`);
    }

    //Créer new patient ac id
    createPatientUSLD(patient: PatientUSLD): Observable<PatientUSLD> {
        return this.http.post<PatientUSLD>(this.apiUrl, patient);
    }

    // Mettre à jour
    update(id: number, patient: PatientUSLD): Observable<PatientUSLD> {
        return this.http.put<PatientUSLD>(`${this.apiUrl}/${id}`, patient);
    }

    // Supprimer
    delete(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}