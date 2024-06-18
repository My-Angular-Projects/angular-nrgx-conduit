import { createActionGroup, props } from '@ngrx/store';

import { IUserLogin, IUserRegister } from '@interfaces';

export const AuthActions = createActionGroup({
  source: 'Auth',
  events: {
    Register: props<IUserRegister>(),
    'Register Success': props<IUserLogin>(),
    'Register Failure': props<any>(),
  },
});
