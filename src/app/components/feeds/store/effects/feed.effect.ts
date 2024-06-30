import { Actions, createEffect, ofType } from '@ngrx/effects';
import { inject } from '@angular/core';
import { FeedActionGroup } from '../actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { FeedService } from '../../../../services';
import { IFeed } from '../../../../interfaces';

export const feedEffect = createEffect(
  (actions$ = inject(Actions), feedService = inject(FeedService)) =>
    actions$.pipe(
      ofType(FeedActionGroup.get),
      switchMap(({ request }) =>
        feedService.getFeeds(request).pipe(
          map((response: IFeed) => FeedActionGroup.success({ response })),
          catchError(() => of(FeedActionGroup.failure())),
        ),
      ),
    ),
  { functional: true },
);
