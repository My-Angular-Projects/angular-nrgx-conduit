import { createReducer, on } from '@ngrx/store';

import { AuthActions } from '../actions';
import { IAuthState } from '../../../../interfaces';

export const authFeatureKey = 'auth';

export const initialAuthState: IAuthState = {
  user: null,
  isSubmitting: false,
  isLoggingIn: null,
  errors: null,
};

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.register, (state: IAuthState) => ({
    ...state,
    isSubmitting: true,
    errors: null,
  })),
  on(AuthActions.registerSuccess, (state: IAuthState, { response }) => ({
    ...state,
    user: { ...response },
    isSubmitting: false,
    isLoggingIn: true,
  })),
  on(AuthActions.registerFailure, (state: IAuthState, { response }) => ({
    ...state,
    isSubmitting: false,
    errors: response,
  })),
);
