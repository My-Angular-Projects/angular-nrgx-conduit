import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IRegisteredUser } from '../../../../interfaces';

export const CurrentUserAction = createActionGroup({
  source: 'Current User',
  events: {
    Get: emptyProps(),
    Success: props<{ response: IRegisteredUser }>(),
    Failure: emptyProps(),
  },
});
