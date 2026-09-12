import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home').then((m) => m.Home) },
  { path: 'galleria', loadComponent: () => import('./pages/galleria/galleria').then((m) => m.Galleria) },
  { path: 'artisti', loadComponent: () => import('./pages/artisti/artisti').then((m) => m.Artisti) },
  { path: 'stili-prezzi', loadComponent: () => import('./pages/stili-prezzi/stili-prezzi').then((m) => m.StiliPrezzi) },
  { path: 'prenota', loadComponent: () => import('./pages/prenota/prenota').then((m) => m.Prenota) },
  { path: 'contatti', loadComponent: () => import('./pages/contatti/contatti').then((m) => m.Contatti) },
  { path: '**', redirectTo: '' },
];
