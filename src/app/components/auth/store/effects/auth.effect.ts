import { Actions, createEffect, ofType } from '@ngrx/effects';
import { inject } from '@angular/core';
import { AuthActions } from '../actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { UserRegisterModel } from '../../../../models';
import { AuthService, PersistenceService } from '../../../../services';
import { ICurrentUser } from '../../../../interfaces';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

export const authEffect = createEffect(
  (
    actions$ = inject(Actions),
    service = inject(AuthService),
    persistenceService = inject(PersistenceService),
  ) =>
    actions$.pipe(
      ofType(AuthActions.register),
      switchMap(({ request }) => {
        const { username, password, email } = request;

        return service
          .signup(new UserRegisterModel(username, password, email))
          .pipe(
            map((response: ICurrentUser) => {
              const { token, ...rest } = response;
              persistenceService.setToken(token);

              return AuthActions.registerSuccess({ response: rest });
            }),
            catchError((response: HttpErrorResponse) =>
              of(
                AuthActions.registerFailure({
                  response: response.error.errors,
                }),
              ),
            ),
          );
      }),
    ),
  { functional: true },
);

export const redirectAfterSuccessAuth = createEffect(
  () =>
    inject(Actions).pipe(
      ofType(AuthActions.registerSuccess),
      tap(() => inject(Router).navigate(['/'])),
    ),
  { functional: true, dispatch: false },
);
