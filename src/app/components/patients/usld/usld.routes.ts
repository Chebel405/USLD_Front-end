import { Routes } from '@angular/router';
import { AddPatientUsldComponent } from './add-patient-usld/add-patient-usld.component';
import { SearchPatientUsldComponent } from './search-patient-usld/search-patient-usld.component';

export const USLD_ROUTES: Routes = [
    {
        path: 'ajouter',
        component: AddPatientUsldComponent,
    },

];
