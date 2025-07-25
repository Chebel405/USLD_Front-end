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

    private isBrowser(): boolean {
        return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
    }

    saveToken(token: string): void {
        if (this.isBrowser()) {
            localStorage.setItem('jwtToken', token);
        }
    }

    getToken(): string | null {
        return this.isBrowser() ? localStorage.getItem('jwtToken') : null;
    }

    logout(): void {
        if (this.isBrowser()) {
            localStorage.removeItem('jwtToken');
        }
    }

    isLoggedIn(): boolean {
        return this.isBrowser() && !!localStorage.getItem('jwtToken');
    }
}
