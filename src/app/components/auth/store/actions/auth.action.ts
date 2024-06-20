import { createActionGroup, props } from '@ngrx/store';
import {
  IBackendErrors,
  ICurrentUser,
  IUserRegister,
} from '../../../../interfaces';

export const AuthActions = createActionGroup({
  source: 'Auth',
  events: {
    Register: props<{ request: IUserRegister }>(),
    'Register Success': props<{ response: ICurrentUser }>(),
    'Register Failure': props<{ response: IBackendErrors }>(),
  },
});
