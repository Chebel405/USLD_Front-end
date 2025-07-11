import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl = 'http://localhost:8081/auth';

    constructor(private http: HttpClient) { }

    login(email: string, motDePasse: string): Observable<{ token: string }> {
        return this.http.post<{ token: string }>(`${this.apiUrl}/login`, {
            email,
            motDePasse
        });
    }

    saveToken(token: string): void {
        localStorage.setItem('jwtToken', token);
    }

    getToken(): string | null {
        return localStorage.getItem('jwtToken');
    }

    logout(): void {
        localStorage.removeItem('jwtToken');
    }

    isLoggedIn(): boolean {
        return !!this.getToken();
    }
}
