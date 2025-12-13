import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PatientUSLD } from '../models/patient-usld.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PatientUsldService {
    private apiUrl = 'http://localhost:8081/patients/usld';

    constructor(private http: HttpClient) { }


    findAll(): Observable<PatientUSLD[]> {
        return this.http.get<PatientUSLD[]>(this.apiUrl);
    }

    // Get patient by ID
    findById(id: number): Observable<PatientUSLD> {
        return this.http.get<PatientUSLD>(`${this.apiUrl}/${id}`);
    }

    // Create new patient
    create(patient: PatientUSLD): Observable<PatientUSLD> {
        return this.http.post<PatientUSLD>(this.apiUrl, patient);
    }

    // Update patient
    update(id: number, patient: PatientUSLD): Observable<PatientUSLD> {
        return this.http.put<PatientUSLD>(`${this.apiUrl}/${id}`, patient);
    }

    // Delete patient
    delete(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }

    // Search by name
    findByNom(nom: string): Observable<PatientUSLD[]> {
        console.log("API call to:", `${this.apiUrl}/search/nom?nom=${nom}`);
        return this.http.get<PatientUSLD[]>(`${this.apiUrl}/search/nom?nom=${nom}`);
    }

    // Search by first name
    findByPrenom(prenom: string): Observable<PatientUSLD[]> {
        console.log("API call to:", `${this.apiUrl}/search/prenom?prenom=${prenom}`);
        return this.http.get<PatientUSLD[]>(`${this.apiUrl}/search/prenom?prenom=${prenom}`);
    }

    // Search by birth date
    findByDateNaissance(dateNaissance: string): Observable<PatientUSLD[]> {
        console.log("API call to:", `${this.apiUrl}/search/date-naissance?dateNaissance=${dateNaissance}`);
        return this.http.get<PatientUSLD[]>(`${this.apiUrl}/search/date-naissance?dateNaissance=${dateNaissance}`);
    }

    // Search by room number
    findByNumeroChambre(numeroChambre: string): Observable<PatientUSLD[]> {
        console.log("API call to:", `${this.apiUrl}/search/chambre?numeroChambre=${numeroChambre}`);
        return this.http.get<PatientUSLD[]>(`${this.apiUrl}/search/chambre?numeroChambre=${numeroChambre}`);
    }

    // Search by autonomy level
    findByAutonomie(niveauAutonomie: string): Observable<PatientUSLD[]> {
        console.log("API call to:", `${this.apiUrl}/search/autonomie?niveauAutonomie=${niveauAutonomie}`);
        return this.http.get<PatientUSLD[]>(`${this.apiUrl}/search/autonomie?niveauAutonomie=${niveauAutonomie}`);
    }
}
