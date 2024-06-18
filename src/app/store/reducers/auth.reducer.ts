import { createReducer, on } from '@ngrx/store';

import { IAuthState } from '@interfaces';
import { AuthActions } from '@store/actions';

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
    }),
  ),
);
