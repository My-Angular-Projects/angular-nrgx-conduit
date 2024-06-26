import { Routes } from '@angular/router';
import { SigninComponent, SignupComponent } from '@components/auth';

export const routes: Routes = [
  {
    path: 'signup',
    loadComponent: () => SignupComponent,
  },
  {
    path: 'signin',
    loadComponent: () => SigninComponent,
  },
];
