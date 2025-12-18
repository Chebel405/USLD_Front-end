import { Routes } from '@angular/router';
import { AddPatientSansSoinComponent } from './add-patient-sans-soin/add-patient-sans-soin.component';

export const SANS_SOIN_ROUTES: Routes = [
    {
        path: 'ajouter',
        component: AddPatientSansSoinComponent,
    }
];
