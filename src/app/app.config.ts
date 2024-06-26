import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { STORAGE } from './tokens';
import { loginInterceptor } from './interceptors';
import {
  authFeatureKey,
  authReducer,
} from './components/auth/store/reducers/auth.reducer';
import { provideEffects } from '@ngrx/effects';
import * as authEffects from './components/auth/store/effects/auth.effect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(),
    provideState({ name: authFeatureKey, reducer: authReducer }),
    provideEffects(authEffects),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideHttpClient(withInterceptors([loginInterceptor])),
    // we can provide the desired Storage (localStorage, sessionStorage, etc.) to our Angular application
    {
      provide: STORAGE,
      useValue: localStorage,
    },
  ],
};
