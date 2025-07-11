import { Routes } from '@angular/router';

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
        path: 'sans-soin',
        loadChildren: () =>
            import('./components/patients/sans-soin/sans-soin.routes').then((m) => m.SANS_SOIN_ROUTES),
    },
    {
        path: '',
        redirectTo: '/usld/ajouter',
        pathMatch: 'full',
    },

];
