import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'usld',
        loadChildren: () =>
            import('./components/patients/usld/usld.routes').then((m) => m.USLD_ROUTES),
    },
    {
        path: '',
        redirectTo: '/usld/ajouter',
        pathMatch: 'full',
    }
];
