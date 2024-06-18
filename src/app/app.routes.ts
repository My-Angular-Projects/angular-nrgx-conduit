import { Routes } from '@angular/router';
import { SignupComponent } from '@components/auth';

export const routes: Routes = [
  { path: 'signup', loadComponent: () => SignupComponent },
];
