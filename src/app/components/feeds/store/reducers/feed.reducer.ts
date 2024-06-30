import { createReducer, on } from '@ngrx/store';
import { FeedActionGroup } from '../actions';
import { IFeed, IFeedState } from '../../../../interfaces';

export const feedsFeatureKey = 'feeds';

export const initialState: IFeedState = {
  isLoading: false,
  data: <IFeed>{},
  errors: '',
  articlesLimit: 10,
};

export const feedsReducer = createReducer(
  initialState,
  on(FeedActionGroup.get, (state: IFeedState) => ({
    ...state,
    isLoading: true,
  })),
  on(FeedActionGroup.success, (state: IFeedState, { response }) => ({
    ...state,
    isLoading: false,
    data: response,
  })),
  on(FeedActionGroup.failure, (state: IFeedState) => ({
    ...state,
    isLoading: false,
  })),
);
