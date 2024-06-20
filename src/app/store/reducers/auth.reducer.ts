import { createReducer, on } from '@ngrx/store';

import { IAuthState } from '@interfaces';
import { AuthActions } from '@store/actions';

export const authFeatureKey = 'auth';

export const initialAuthState: IAuthState = {
  user: {
    username: '',
    password: '',
    email: '',
  },
  isSubmitting: false,
};

export const authReducer = createReducer(
  initialAuthState,
  on(
    AuthActions.register,
    (state: IAuthState, { username, password, email }) => ({
      ...state,
      user: { username, password, email },
      isSubmitting: true,
    }),
  ),
  on(AuthActions.registerSuccess, (state: IAuthState) => ({
    ...state,
    isSubmitting: false,
  })),
  on(AuthActions.registerFailure, (state: IAuthState) => ({
    ...state,
    isSubmitting: false,
  })),
);
