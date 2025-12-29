import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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

    findById(id: number): Observable<PatientUSLD> {
        return this.http.get<PatientUSLD>(`${this.apiUrl}/${id}`);
    }

    create(patient: PatientUSLD): Observable<PatientUSLD> {
        return this.http.post<PatientUSLD>(this.apiUrl, patient);
    }

    update(id: number, patient: PatientUSLD): Observable<PatientUSLD> {
        return this.http.put<PatientUSLD>(`${this.apiUrl}/${id}`, patient);
    }

    delete(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }

    // 🔍 Recherche par nom
    findByNom(nom: string): Observable<PatientUSLD[]> {
        const params = new HttpParams().set('nom', nom);
        return this.http.get<PatientUSLD[]>(`${this.apiUrl}/search/nom`, { params });
    }

    // 🔍 Recherche par prénom
    findByPrenom(prenom: string): Observable<PatientUSLD[]> {
        const params = new HttpParams().set('prenom', prenom);
        return this.http.get<PatientUSLD[]>(`${this.apiUrl}/search/prenom`, { params });
    }

    // 🔍 Recherche par date de naissance (YYYY-MM-DD)
    findByDateNaissance(dateNaissance: string): Observable<PatientUSLD[]> {
        const params = new HttpParams().set('dateNaissance', dateNaissance);
        return this.http.get<PatientUSLD[]>(`${this.apiUrl}/search/date-naissance`, { params });
    }

    // 🔍 Recherche par numéro de chambre (Integer côté back)
    findByNumeroChambre(numeroChambre: number): Observable<PatientUSLD[]> {
        const params = new HttpParams().set('numeroChambre', numeroChambre.toString());
        return this.http.get<PatientUSLD[]>(`${this.apiUrl}/search/chambre`, { params });
    }

    // 🔍 Recherche par niveau d'autonomie
    findByAutonomie(niveauAutonomie: string): Observable<PatientUSLD[]> {
        const params = new HttpParams().set('niveauAutonomie', niveauAutonomie);
        return this.http.get<PatientUSLD[]>(`${this.apiUrl}/search/autonomie`, { params });
    }
}
