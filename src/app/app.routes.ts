import { Routes } from '@angular/router';
import { SignupComponent } from '@components/auth';
import { provideState } from '@ngrx/store';
import {
  authFeatureKey,
  authReducer,
} from './components/auth/store/reducers/auth.reducer';
import { provideEffects } from '@ngrx/effects';
import * as authEffects from './components/auth/store/effects';

export const routes: Routes = [
  {
    path: 'signup',
    providers: [
      provideState({ name: authFeatureKey, reducer: authReducer }),
      provideEffects(authEffects),
    ],
    loadComponent: () => SignupComponent,
  },
  { path: '', redirectTo: 'signup', pathMatch: 'full' }, // temporary solution
];
