import { createFeatureSelector, createSelector } from '@ngrx/store';
import { authFeatureKey } from '../reducers/auth.reducer';
import { IAuthState } from '../../../../interfaces';

// Deprecate the RootState generic of createFeatureSelector
// https://github.com/ngrx/platform/issues/3179
export const authFeatureSelect =
  createFeatureSelector<IAuthState>(authFeatureKey);

export const isSubmittingSelector = createSelector(
  authFeatureSelect,
  (state: IAuthState) => state.isSubmitting,
);

export const currentUserSelector = createSelector(
  authFeatureSelect,
  (state: IAuthState) => state.user,
);

export const isLoggedInSelector = createSelector(
  authFeatureSelect,
  (state: IAuthState) => state.isLoggingIn,
);

export const isAnonymousSelector = createSelector(
  authFeatureSelect,
  (state: IAuthState) =>
    state.isLoggingIn === false || state.isLoggingIn === null,
);

export const authErrorsSelector = createSelector(
  authFeatureSelect,
  (state: IAuthState) => state.errors,
);
