import { createActionGroup, props } from '@ngrx/store';
import {
  IBackendErrors,
  IRegisteredUser,
  IUserRegister,
} from '../../../../interfaces';

export const AuthActions = createActionGroup({
  source: 'Auth',
  events: {
    Register: props<{ request: IUserRegister }>(),
    'Register Success': props<{ response: IRegisteredUser }>(),
    'Register Failure': props<{ response: IBackendErrors }>(),
  },
});
