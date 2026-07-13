export interface Traitement {
    id?: number;
    nomMedicament: string;
    dosageMg: number;
    dateDebut: string;
    dateFin: string | null;
    priseMatin: number;
    priseMidi: number;
    priseSoir: number;
    priseCoucher: number;
    observations?: string;
    patientId: number;
}