import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IFeed, IFeedState } from '../../../../interfaces';
import { feedsFeatureKey } from '../reducers';
import { generateRange } from '../../../helpers';

export const feedFeatureSelector =
  createFeatureSelector<IFeedState>(feedsFeatureKey);

export const feedLoadingSelector = createSelector(
  feedFeatureSelector,
  (state: IFeedState): boolean => state.isLoading,
);

export const feedErrorsSelector = createSelector(
  feedFeatureSelector,
  (state: IFeedState): string => state.errors,
);

export const feedDataSelector = createSelector(
  feedFeatureSelector,
  (state: IFeedState): IFeed => state.data,
);

export const feedLimitSelector = createSelector(
  feedFeatureSelector,
  (state: IFeedState): number => state.articlesLimit,
);

export const feedCountSelector = createSelector(
  feedFeatureSelector,
  (state: IFeedState): number => state.data.articlesCount,
);

export const feedPagesCountSelector = createSelector(
  feedCountSelector,
  feedLimitSelector,
  (articlesCount: number, articlesLimit: number): number[] => {
    if (articlesCount && articlesLimit) {
      return generateRange(1, Math.ceil(articlesCount / articlesLimit));
    } else {
      return [];
    }
  },
);
