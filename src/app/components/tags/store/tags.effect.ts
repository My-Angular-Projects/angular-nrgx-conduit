import { Actions, createEffect, ofType } from '@ngrx/effects';
import { inject } from '@angular/core';
import { TagsActionsGroup } from './tags.action';
import { catchError, map, of, switchMap } from 'rxjs';
import { PopularTagsService } from '../../../services';
import { PopularTag } from '../../../interfaces';

export const tagsEffect = createEffect(
  (actions$ = inject(Actions), service = inject(PopularTagsService)) =>
    actions$.pipe(
      ofType(TagsActionsGroup.get),
      switchMap(() =>
        service.getTags().pipe(
          map((tags: PopularTag[]) => TagsActionsGroup.success({ tags })),
          catchError(() => of(TagsActionsGroup.failure())),
        ),
      ),
    ),
  { functional: true },
);
