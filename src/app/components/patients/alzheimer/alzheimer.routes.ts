import { Routes } from '@angular/router';
import { AddPatientAlzheimerComponent } from './add-patient-alzheimer/add-patient-alzheimer.component';

export const ALZHEIMER_ROUTES: Routes = [
    {
        path: 'ajouter',
        component: AddPatientAlzheimerComponent,
    }
];
