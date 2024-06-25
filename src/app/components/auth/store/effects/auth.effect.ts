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
    authService = inject(AuthService),
    persistenceService = inject(PersistenceService),
  ) =>
    actions$.pipe(
      ofType(AuthActions.register),
      switchMap(({ request }) => {
        const { username, password, email } = request;

        return authService
          .signup(new UserRegisterModel(username, password, email))
          .pipe(
            map((response: ICurrentUser) => {
              const { token, ...rest } = response;
              persistenceService.setToken(token);

              return AuthActions.success({ response: rest });
            }),
            catchError((response: HttpErrorResponse) =>
              of(
                AuthActions.failure({
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
      ofType(AuthActions.success),
      tap(() => router.navigate(['/'])),
    ),
  { functional: true, dispatch: false },
);
