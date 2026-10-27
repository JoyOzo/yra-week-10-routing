import { Routes } from '@angular/router';
import { About } from './about/about';
import { Events } from './events/events';
import {  canActivateChildGuard,  canActivateGuard,  canDeactivateGuard,  canMatchGuard,} from './guards';

export const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },

  // 1. EAGER loading: bundled in the main file, imported at the top
  { path: 'about', component: About },
  { path: 'events', component: Events },

  // 2. LAZY loading: downloaded only when the user visits the route
  {
    path: 'programmes',
    loadComponent: () => import('./programmes/programmes').then(m => m.Programmes),
  },
  {
    path: 'community',
    loadComponent: () => import('./community/community').then(m => m.Community),
  },

  // 3. PRELOADING: lazy, but downloaded in the background after the app starts
   {
    path: 'resource',
    data: { preload: true },
    canMatch: [canMatchGuard],
    canActivate: [canActivateGuard],
    canDeactivate: [canDeactivateGuard],
    loadComponent: () => import('./resource/resource').then(m => m.Resource),
  },
  {
    path: 'opportunities',
    data: { preload: true },
    canMatch: [canMatchGuard],
    canActivate: [canActivateGuard],
    canActivateChild: [canActivateChildGuard],
    canDeactivate: [canDeactivateGuard],
    loadComponent: () => import('./opportunities/opportunities').then(m => m.Opportunities),
    children: [
      { path: '', redirectTo: 'resource-opportunities', pathMatch: 'full' },
      {
        path: 'resource-opportunities',
        loadComponent: () =>
          import('./opportunities/resource-opportunities/resource-opportunities').then(m => m.ResourceOpportunities),
      },
      {
        path: 'programs-opportunities',
        loadComponent: () =>
          import('./opportunities/programs-opportunities/programs-opportunities').then(m => m.ProgramsOpportunities),
      },
      {
        path: 'community-opportunities',
        loadComponent: () =>
          import('./opportunities/community-opportunities/community-opportunities').then(m => m.CommunityOpportunities),
      },
    ],
  },
];