import { createReducer, on } from '@ngrx/store';
import { FeedAction } from '../actions';
import { IFeedState } from '../../../../interfaces';

export const feedsFeatureKey = 'feeds';

export const initialState: IFeedState = {
  isLoading: false,
  data: null,
  errors: null,
};

export const feedsReducer = createReducer(
  initialState,
  on(FeedAction.get, (state: IFeedState) => ({ ...state, isLoading: true })),
  on(FeedAction.success, (state: IFeedState, { response }) => ({
    ...state,
    isLoading: false,
    data: response,
  })),
  on(FeedAction.failure, (state: IFeedState) => ({
    ...state,
    isLoading: false,
  })),
);
