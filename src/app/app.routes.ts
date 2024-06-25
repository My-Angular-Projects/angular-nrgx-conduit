import { Routes } from '@angular/router';
import { SigninComponent, SignupComponent } from '@components/auth';
import { provideState } from '@ngrx/store';
import {
  authFeatureKey,
  authReducer,
} from './components/auth/store/reducers/auth.reducer';
import { provideEffects } from '@ngrx/effects';
import * as authEffects from './components/auth/store/effects/auth.effect';

export const routes: Routes = [
  {
    path: 'signup',
    providers: [
      provideState({ name: authFeatureKey, reducer: authReducer }),
      provideEffects(authEffects),
    ],
    loadComponent: () => SignupComponent,
  },
  {
    path: 'signin',
    providers: [
      provideState({ name: authFeatureKey, reducer: authReducer }),
      provideEffects(authEffects),
    ],
    loadComponent: () => SigninComponent,
  },
];
