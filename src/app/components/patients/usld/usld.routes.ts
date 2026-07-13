import { Routes } from '@angular/router';
import { AddPatientUsldComponent } from './add-patient-usld/add-patient-usld.component';
import { SearchPatientUsldComponent } from './search-patient-usld/search-patient-usld.component';
import { ListTraitementComponent } from './list-traitement/list-traitement.component';
import { EditTraitementComponent } from './edit-traitement/edit-traitement.component';

export const USLD_ROUTES: Routes = [
    {
        path: 'ajouter',
        component: AddPatientUsldComponent,
    },
    {
        path: 'traitements',
        component: ListTraitementComponent,
    },
    {
        path: 'traitements/modifier/:id',
        component: EditTraitementComponent
    }

];
