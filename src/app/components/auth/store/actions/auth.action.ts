import { createActionGroup, props } from '@ngrx/store';
import {
  IBackendErrors,
  IRegisteredUser,
  IUserLogin,
  IUserRegister,
} from '../../../../interfaces';

export const AuthActions = createActionGroup({
  source: 'Auth',
  events: {
    Register: props<{ request: IUserRegister }>(),
    Login: props<{ request: IUserLogin }>(),
    Success: props<{ response: IRegisteredUser }>(),
    Failure: props<{ response: IBackendErrors }>(),
  },
});
