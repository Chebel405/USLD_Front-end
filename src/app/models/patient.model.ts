export interface Patient {
    id?: number;
    nom: string;
    prenom: string;
    dateNaissance: string;
    numeroChambre: number;
    niveauAutonomie: string;
    toiletteAssistee: boolean;
    aideHabillage: boolean;
    aideRepas: boolean;
}
