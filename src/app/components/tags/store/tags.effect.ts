import { Actions, createEffect, ofType } from '@ngrx/effects';
import { inject } from '@angular/core';
import { TagsActionsGroup } from './tags.action';
import { catchError, map, of, switchMap } from 'rxjs';
import { PopularTagsService } from '../../../services';

export const tagsEffect = createEffect(
  () =>
    inject(Actions).pipe(
      ofType(TagsActionsGroup.get),
      switchMap(() =>
        inject(PopularTagsService)
          .getTags()
          .pipe(
            map((response) => TagsActionsGroup.success(response)),
            catchError(() => of(TagsActionsGroup.failure())),
          ),
      ),
    ),
  { functional: true },
);
