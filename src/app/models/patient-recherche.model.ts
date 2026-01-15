import { PatientType } from './patient.model';

export interface PatientRecherche {
    id?: number;
    nom?: string;
    prenom?: string;
    dateNaissance?: string;
    numeroChambre?: string;
    niveauAutonomie?: string;
    typePatient?: 'USLD' | 'ALZHEIMER' | 'SANS_SOIN';
}
