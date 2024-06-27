import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IFeedState } from '../../../../interfaces';
import { feedsFeatureKey } from '../reducers';

export const feedFeatureSelector =
  createFeatureSelector<IFeedState>(feedsFeatureKey);

export const feedIsLoadingSelector = createSelector(
  feedFeatureSelector,
  (state: IFeedState) => state.isLoading,
);

export const feedErrorsSelector = createSelector(
  feedFeatureSelector,
  (state: IFeedState) => state.errors,
);

export const feedDataSelector = createSelector(
  feedFeatureSelector,
  (state: IFeedState) => state.data,
);
