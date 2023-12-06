import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { inject } from '@angular/core';
import { AuthService } from './services/auth.service';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./auth/login/login.component').then(
        (comp) => comp.LoginComponent
      ),
  },
  {
    path: '',
    loadComponent: () =>
      import('./pages/pages.component').then((comp) => comp.PagesComponent),
    canActivate: [authGuard],
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/home/home.component').then(
            (comp) => comp.HomeComponent
          ),
      },
    ],
  },
];
