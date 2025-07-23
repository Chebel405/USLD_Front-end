// src/app/services/error.service.ts
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ErrorService {
    constructor() { }

    public handleError(error: any): string {
        if (error.status === 0) {
            return 'Erreur réseau : impossible de joindre le serveur.';
        }

        if (error.status === 400) {
            return 'Requête invalide. Vérifie les champs du formulaire.';
        }

        if (error.status === 401 || error.status === 403) {
            return 'Accès non autorisé. Vérifie tes identifiants.';
        }

        if (error.status === 404) {
            return 'Ressource introuvable.';
        }

        if (error.status === 500) {
            return 'Erreur interne du serveur. Réessaie plus tard.';
        }

        return 'Une erreur inconnue est survenue.';
    }
}
