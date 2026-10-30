import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home').then(m => m.Home),
    title: 'Home | Stories Reader',
  },
  {
    path: 'browse',
    loadComponent: () =>
      import('./features/browse/browse').then(m => m.Browse),
    title: 'Browse | Stories Reader',
  },
  {
    path: 'story/:slug',
    loadComponent: () =>
      import('./features/project-details/project-details')
        .then(m => m.ProjectDetails),
    title: 'Story | Stories Reader',
  },
  {
    path: 'read/:slug/:chapter',
    loadComponent: () =>
      import('./features/reader/reader').then(m => m.Reader),
    title: 'Reader | Stories Reader',
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./features/about/about').then(m => m.About),
    title: 'About | Stories Reader',
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/dashboard').then(m => m.Dashboard),
    title: 'Dashboard | Stories Reader',
  },
  {
    path: '**',
    redirectTo: '',
  },
];