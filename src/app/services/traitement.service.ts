import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Traitement } from '../models/traitement.model';

@Injectable({
  providedIn: 'root'
})
export class TraitementService {

  private readonly apiUrl = 'http://localhost:8081/traitements';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Traitement[]> {
    return this.http.get<Traitement[]>(this.apiUrl)
  }

  getById(id: number): Observable<Traitement> {
    return this.http.get<Traitement>(`${this.apiUrl}/${id}`);
  }

  create(traitement: Traitement): Observable<Traitement> {
    return this.http.post<Traitement>(this.apiUrl, traitement);
  }

  update(id: number, traitement: Traitement): Observable<Traitement> {
    return this.http.put<Traitement>(
      `${this.apiUrl}/${id}`,
      traitement
    );
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getByPatientId(patientId: number): Observable<Traitement[]> {
    return this.http.get<Traitement[]>(
      `${this.apiUrl}/patient/${patientId}`
    );
  }
}
