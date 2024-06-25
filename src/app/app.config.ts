import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { STORAGE } from './tokens';
import { loginInterceptor } from './interceptors';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideHttpClient(withInterceptors([loginInterceptor])),
    // we can provide the desired Storage (localStorage, sessionStorage, etc.) to our Angular application
    {
      provide: STORAGE,
      useValue: localStorage,
    },
  ],
};
