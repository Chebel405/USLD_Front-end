import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PatientRecherche } from '../models/patient-recherche.model';
@Injectable({
  providedIn: 'root'
})
export class PatientSearchService {

  private apiUrl = 'http://localhost:8081/patients/search';

  constructor(private http: HttpClient) { }

  search(request: PatientRecherche): Observable<PatientRecherche[]> {
    return this.http.post<PatientRecherche[]>(this.apiUrl, request);
  }
}
