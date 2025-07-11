import { Patient } from "./patient.model";

export interface PatientAlzheimer extends Patient {
    stadeMaladie: string;
    suiviPsychologue: boolean;
}
