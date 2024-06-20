import { Actions, createEffect, ofType } from '@ngrx/effects';
import { inject } from '@angular/core';
import { AuthActions } from '../actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { UserRegisterModel } from '../../../../models';
import { AuthService } from '../../../../services';
import { ICurrentUser } from '../../../../interfaces';

export const authEffect = createEffect(
  (actions$ = inject(Actions), service = inject(AuthService)) =>
    actions$.pipe(
      ofType(AuthActions.register),
      switchMap(({ request }) => {
        const { username, password, email } = request;

        return service
          .signup(new UserRegisterModel(username, password, email))
          .pipe(
            map((response: ICurrentUser) =>
              AuthActions.registerSuccess({ response }),
            ),
            catchError((response) =>
              of(AuthActions.registerFailure({ response })),
            ),
          );
      }),
    ),
  { functional: true },
);
