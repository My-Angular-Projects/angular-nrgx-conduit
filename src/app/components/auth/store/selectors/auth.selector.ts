/** Не стал менять на FeatureCreator - просто чтобы показать, что могу и вручную делать селекторы */
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { authFeatureKey } from '../reducers/auth.reducer';
import {
  IAuthState,
  IBackendErrors,
  IRegisteredUser,
} from '../../../../interfaces';

// Deprecate the RootState generic of createFeatureSelector
// https://github.com/ngrx/platform/issues/3179
export const authFeatureSelect =
  createFeatureSelector<IAuthState>(authFeatureKey);

export const isSubmittingSelector = createSelector(
  authFeatureSelect,
  (state: IAuthState): boolean => state.isSubmitting,
);

export const currentUserSelector = createSelector(
  authFeatureSelect,
  (state: IAuthState): IRegisteredUser | null => state.user,
);

export const isLoggedInSelector = createSelector(
  authFeatureSelect,
  (state: IAuthState): boolean | null => state.isLoggingIn,
);

export const isAnonymousSelector = createSelector(
  authFeatureSelect,
  (state: IAuthState): boolean => state.isLoggingIn === false,
);

export const authErrorsSelector = createSelector(
  authFeatureSelect,
  (state: IAuthState): IBackendErrors | null => state.errors,
);
