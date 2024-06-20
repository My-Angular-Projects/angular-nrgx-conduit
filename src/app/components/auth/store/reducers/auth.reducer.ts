import { createReducer, on } from '@ngrx/store';

import { AuthActions } from '../actions';
import { IAuthState } from '../../../../interfaces';

export const authFeatureKey = 'auth';

export const initialAuthState: IAuthState = {
  user: {
    id: null,
    email: '',
    username: '',
    bio: null,
    image: '',
    token: '',
  },
  isSubmitting: false,
};

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.register, (state: IAuthState) => ({
    ...state,
    isSubmitting: true,
  })),
  on(AuthActions.registerSuccess, (state: IAuthState, { response }) => ({
    ...state,
    user: { ...response },
    isSubmitting: false,
  })),
  on(AuthActions.registerFailure, (state: IAuthState, { response }) => ({
    ...state,
    isSubmitting: false,
  })),
);
