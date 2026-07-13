import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { guestGuard } from './guards/guest.guard';

export const routes: Routes = [
    {
        path: 'home',
        canActivate: [authGuard],
        loadComponent: () =>
            import('./components/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'usld',
        canActivate: [authGuard],
        loadChildren: () =>
            import('./components/patients/usld/usld.routes').then((m) => m.USLD_ROUTES),
    },
    {
        path: 'login',
        canActivate: [guestGuard],
        loadComponent: () => import('./components/auth/login/login.component').then(m => m.LoginComponent)
    },
    {
        path: 'alzheimer',
        canActivate: [authGuard],
        loadChildren: () =>
            import('./components/patients/alzheimer/alzheimer.routes').then((m) => m.ALZHEIMER_ROUTES),
    },
    {
        path: 'patients/sanssoin',
        canActivate: [authGuard],
        loadChildren: () =>
            import('./components/patients/sans-soin/sans-soin.routes').then((m) => m.SANS_SOIN_ROUTES),
    },

    {
        path: 'register',
        canActivate: [guestGuard],
        loadComponent: () =>
            import('./components/auth/register/register.component').then(m => m.RegisterComponent)
    },
    {
        path: 'patients/alzheimer',
        canActivate: [authGuard],
        loadComponent: () =>
            import('./components/patients/alzheimer/list-patient-alzheimer/list-patient-alzheimer.component')
                .then(m => m.ListPatientAlzheimerComponent)
    },
    {
        path: 'patients/tous',
        canActivate: [authGuard],
        loadComponent: () =>
            import('./components/patients/all-patients/all-patients.component')
                .then(m => m.AllPatientsComponent)
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
    },
    {
        path: 'search',
        canActivate: [authGuard],
        loadComponent: () =>
            import('./components/patients/usld/search-patient-usld/search-patient-usld.component')
                .then(m => m.SearchPatientUsldComponent)
    },
    {
        path: 'patients/search',
        canActivate: [authGuard],
        loadComponent: () =>
            import('./components/patients/search-patient/search-patient.component')
                .then(m => m.SearchPatientComponent)
    },
    {
        path: '**',
        redirectTo: 'login'
    }



];
