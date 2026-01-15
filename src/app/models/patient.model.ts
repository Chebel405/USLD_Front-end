export type PatientType = 'patientUSLD' | 'patientAlzheimer' | 'patientSansSoin';

export interface Patient {
    id?: number;
    nom: string;
    prenom: string;
    dateNaissance: string;

    numeroChambre?: string;
    niveauAutonomie?: string;
    toiletteAssistee?: boolean;
    aideHabillage?: boolean;
    aideRepas?: boolean;

    '@type'?: PatientType;
}
