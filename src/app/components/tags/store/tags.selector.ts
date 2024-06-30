import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ITagsState } from '../../../interfaces';
import { tagsFeatureKey } from './tags.reducer';

export const tagsFeatureSelector =
  createFeatureSelector<ITagsState>(tagsFeatureKey);

export const tagsLoadingSelector = createSelector(
  tagsFeatureSelector,
  (state: ITagsState) => state.isLoading,
);

export const tagsErrorsSelector = createSelector(
  tagsFeatureSelector,
  (state: ITagsState) => state.errors,
);

export const tagsDataSelector = createSelector(
  tagsFeatureSelector,
  (state: ITagsState) => state.data,
);
