import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IFeed } from '../../../../interfaces';

export const FeedAction = createActionGroup({
  source: 'Feed',
  events: {
    Get: props<{ request: string }>(),
    Success: props<{ response: IFeed }>(),
    Failure: emptyProps(),
  },
});
