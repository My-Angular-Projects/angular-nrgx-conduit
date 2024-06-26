import { Actions, createEffect, ofType } from '@ngrx/effects';
import { inject } from '@angular/core';
import { CurrentUserAction } from '../actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { AuthService, PersistenceService } from '../../../../services';
import { ICurrentUser } from '../../../../interfaces';

export const currentUserEffect = createEffect(
  (
    actions$ = inject(Actions),
    authService = inject(AuthService),
    persistenceService = inject(PersistenceService),
  ) =>
    actions$.pipe(
      ofType(CurrentUserAction.get),
      switchMap(() => {
        const token = persistenceService.getToken();

        if (!token) {
          return of(CurrentUserAction.failure());
        }

        return authService.getCurrentUser().pipe(
          map((response: ICurrentUser) => {
            const { token, ...rest } = response;

            return CurrentUserAction.success({ response: rest });
          }),
          catchError(() => of(CurrentUserAction.failure())),
        );
      }),
    ),
  { functional: true },
);
