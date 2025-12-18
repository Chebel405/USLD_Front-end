import { Routes } from '@angular/router';
import { ListPatientSansSoinComponent } from './components/patients/sans-soin/list-patient-sans-soin/list-patient-sans-soin.component';

export const routes: Routes = [
    {
        path: 'usld',
        loadChildren: () =>
            import('./components/patients/usld/usld.routes').then((m) => m.USLD_ROUTES),
    },
    {
        path: 'login',
        loadComponent: () => import('./components/auth/login/login.component').then(m => m.LoginComponent)
    },
    {
        path: 'alzheimer',
        loadChildren: () =>
            import('./components/patients/alzheimer/alzheimer.routes').then((m) => m.ALZHEIMER_ROUTES),
    },
    {
        path: 'patients/sanssoin',
        loadChildren: () =>
            import('./components/patients/sans-soin/sans-soin.routes').then((m) => m.SANS_SOIN_ROUTES),
    },

    {
        path: 'register',
        loadComponent: () =>
            import('./components/auth/register/register.component').then(m => m.RegisterComponent)
    },
    {
        path: 'patients/alzheimer',
        loadComponent: () =>
            import('./components/patients/alzheimer/list-patient-alzheimer/list-patient-alzheimer.component')
                .then(m => m.ListPatientAlzheimerComponent)
    },
    {
        path: 'patients/tous',
        loadComponent: () =>
            import('./components/patients/all-patients/all-patients.component')
                .then(m => m.AllPatientsComponent)
    },
    {
        path: '',
        redirectTo: '/usld/ajouter',
        pathMatch: 'full',
    },
    {
        path: 'rechercher',
        loadComponent: () =>
            import('./components/patients/usld/search-patient-usld/search-patient-usld.component')
                .then(m => m.SearchPatientUsldComponent)
    },


];
