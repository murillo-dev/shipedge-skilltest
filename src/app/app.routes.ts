import { Routes } from '@angular/router';
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
      {
        path: 'contact',
        loadComponent: () =>
          import('./pages/contact/contact.component').then(
            (comp) => comp.ContactComponent
          ),
      },
      {
        path: 'users',
        loadComponent: () =>
          import('./pages/users/users.component').then(
            (comp) => comp.UsersComponent
          ),
      },
      {
        path: 'posts',
        loadComponent: () =>
          import('./pages/posts/posts.component').then(
            (comp) => comp.PostsComponent
          ),
      },
    ],
  },
];
