import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IResponsePopularTag } from '../../../interfaces';

export const TagsActionsGroup = createActionGroup({
  source: 'Tags',
  events: {
    Get: emptyProps(),
    Success: props<IResponsePopularTag>(),
    Failure: emptyProps(),
  },
});
