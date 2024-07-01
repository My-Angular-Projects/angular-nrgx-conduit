import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import { FeedActionGroup } from '../actions';
import { IFeed, IFeedState } from '../../../../interfaces';
import { generateRange } from '../../../helpers';

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

export const feedsFeature = createFeature({
  name: 'feeds',
  reducer: feedsReducer,
  extraSelectors: ({ selectData, selectArticlesLimit }) => {
    const selectArticlesCount = createSelector(
      selectData,
      (data: IFeed): number => data.articlesCount,
    );

    const selectPagesCount = createSelector(
      selectArticlesCount,
      selectArticlesLimit,
      (articlesCount: number, articlesLimit: number): number[] => {
        if (articlesCount && articlesLimit) {
          return generateRange(1, Math.ceil(articlesCount / articlesLimit));
        } else {
          return [];
        }
      },
    );

    return { selectPagesCount };
  },
});
