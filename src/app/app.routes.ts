import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./landing/landing.component').then((m) => m.LandingComponent),
        data: { hideNavigationBar: true },
    },
    {
        path: 'list-view',
        loadComponent: () =>
            import('./data-view/feature/list-items/list-items.component').then((m) => m.ListItemsComponent),
    },
    {
        path: 'custom-directive',
        loadComponent: () => 
            import('./styled-div/custom-directive.component').then((m) => m.CustomDirectiveComponent)
    },
    {
        path: '**',
        redirectTo: '',
    },
];
