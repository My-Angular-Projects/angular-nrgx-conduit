import { Actions, createEffect, ofType } from '@ngrx/effects';
import { inject } from '@angular/core';
import { AuthActions } from '../actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { AuthService, PersistenceService } from '../../../../services';
import { ICurrentUser } from '../../../../interfaces';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

export const loginEffect = createEffect(
  (
    actions$ = inject(Actions),
    authService = inject(AuthService),
    persistenceService = inject(PersistenceService),
  ) =>
    actions$.pipe(
      ofType(AuthActions.login),
      switchMap(({ request }) => {
        return authService.signin({ ...request }).pipe(
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
  (actions$ = inject(Actions), router = inject(Router)) =>
    actions$.pipe(
      ofType(AuthActions.registerSuccess),
      tap(() => router.navigate(['/'])),
    ),
  { functional: true, dispatch: false },
);
