import { APP_INITIALIZER, ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore, Store } from '@ngrx/store';
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
import * as currentUserEffects from './components/auth/store/effects/current-user.effect';
import * as feedEffects from './components/feeds/store/effects/feed.effect';
import * as tagsEffects from './components/tags/store/tags.effect';
import { CurrentUserAction } from './components/auth/store/actions';
import { IGlobalState } from './interfaces';
import {
  feedsFeatureKey,
  feedsReducer,
} from './components/feeds/store/reducers';
import { tagsFeature } from './components/tags/store/tags.reducer';

function initializeApplication(store: Store<IGlobalState>): () => void {
  return (): void => store.dispatch(CurrentUserAction.get());
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(),
    provideState({ name: authFeatureKey, reducer: authReducer }),
    provideState({ name: feedsFeatureKey, reducer: feedsReducer }),
    provideState(tagsFeature),
    provideEffects(authEffects, currentUserEffects, feedEffects, tagsEffects),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideHttpClient(withInterceptors([loginInterceptor])),
    // we can provide the desired Storage (localStorage, sessionStorage, etc.) to our Angular application
    {
      provide: STORAGE,
      useValue: localStorage,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApplication,
      multi: true,
      deps: [Store],
    },
  ],
};
