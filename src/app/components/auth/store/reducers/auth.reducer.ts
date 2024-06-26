import { createReducer, on } from '@ngrx/store';

import { AuthActions, CurrentUserAction } from '../actions';
import { IAuthState } from '../../../../interfaces';

export const authFeatureKey = 'auth';

export const initialAuthState: IAuthState = {
  user: null,
  isSubmitting: false,
  isLoading: false,
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
  on(AuthActions.success, (state: IAuthState, { response }) => ({
    ...state,
    user: { ...response },
    isSubmitting: false,
    isLoggingIn: true,
  })),
  on(AuthActions.failure, (state: IAuthState, { response }) => ({
    ...state,
    isSubmitting: false,
    errors: response,
  })),
  on(CurrentUserAction.get, (state: IAuthState) => ({
    ...state,
    isLoading: true,
  })),
  on(CurrentUserAction.success, (state: IAuthState, { response }) => ({
    ...state,
    user: { ...response },
    isLoggingIn: true,
    isLoading: false,
  })),
  on(CurrentUserAction.failure, (state: IAuthState) => ({
    ...state,
    user: null,
    isLoggingIn: false,
    isLoading: false,
  })),
);
