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

export const authUserSelector = createSelector(
  authFeatureSelect,
  (state: IAuthState) => state.user,
);
