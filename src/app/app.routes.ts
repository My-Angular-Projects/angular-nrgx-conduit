import { Routes } from '@angular/router';
import { SigninComponent, SignupComponent } from '@components/auth';
import { GlobalFeedComponent } from './components/feeds/global-feed/global-feed.component';

export const routes: Routes = [
  {
    path: 'signup',
    loadComponent: () => SignupComponent,
  },
  {
    path: 'signin',
    loadComponent: () => SigninComponent,
  },
  {
    path: '',
    loadComponent: () => GlobalFeedComponent,
  },
];
