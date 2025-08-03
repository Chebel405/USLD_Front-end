
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

    rechercherParNom(nom: string): Observable<PatientUSLD[]> {
        console.log("Appel API vers :", `${this.apiUrl}/search/nom?nom=${nom}`);
        return this.http.get<PatientUSLD[]>(`${this.apiUrl}/search/nom?nom=${nom}`);
    }

    rechercherParPrenom(prenom: string): Observable<PatientUSLD[]> {
        console.log("Appel API vers :", `${this.apiUrl}/search/prenom?prenom=${prenom}`);
        return this.http.get<PatientUSLD[]>(`${this.apiUrl}/search/prenom?prenom=${prenom}`);
    }

    rechercherParDateNaissance(dateNaissance: string): Observable<PatientUSLD[]> {
        console.log("Appel API vers :", `${this.apiUrl}/search/date-naissance?dateNaissance=${dateNaissance}`);
        return this.http.get<PatientUSLD[]>(`${this.apiUrl}/search/date-naissance?dateNaissance=${dateNaissance}`);
    }

    rechercherParNumeroChambre(numeroChambre: string): Observable<PatientUSLD[]> {
        console.log("Appel API vers :", `${this.apiUrl}/search/chambre?numeroChambre=${numeroChambre}`);
        return this.http.get<PatientUSLD[]>(`${this.apiUrl}/search/chambre?numeroChambre=${numeroChambre}`);
    }

    rechercherParAutonomie(niveauAutonomie: string): Observable<PatientUSLD[]> {
        console.log("Appel API vers :", `${this.apiUrl}/search/autonomie?niveauAutonomie=${niveauAutonomie}`);
        return this.http.get<PatientUSLD[]>(`${this.apiUrl}/search/autonomie?niveauAutonomie=${niveauAutonomie}`);
    }

}