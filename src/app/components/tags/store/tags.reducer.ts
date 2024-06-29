import { ITagsState } from '../../../interfaces';
import { createReducer, on } from '@ngrx/store';
import { TagsActionsGroup } from './tags.action';

export const tagsFeatureKey = 'tags';

export const initialState: ITagsState = {
  isLoading: false,
  data: [],
  errors: null,
};

export const tagsReducer = createReducer(
  initialState,
  on(TagsActionsGroup.get, (state: ITagsState) => ({
    ...state,
    isLoading: true,
  })),
  on(TagsActionsGroup.success, (state: ITagsState, { response }) => ({
    ...state,
    data: [...response],
    isLoading: false,
  })),
  on(TagsActionsGroup.failure, (state: ITagsState) => ({
    ...state,
    isLoading: false,
  })),
);
