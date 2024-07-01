import { ITagsState } from '../../../interfaces';
import { createFeature, createReducer, on } from '@ngrx/store';
import { TagsActionsGroup } from './tags.action';

export const initialState: ITagsState = {
  isLoading: false,
  data: [],
  errors: null,
};

export const tagsFeature = createFeature({
  name: 'tags',
  reducer: createReducer(
    initialState,
    on(TagsActionsGroup.get, (state: ITagsState) => ({
      ...state,
      isLoading: true,
    })),
    on(TagsActionsGroup.success, (state: ITagsState, { tags }) => ({
      ...state,
      data: [...tags],
      isLoading: false,
    })),
    on(TagsActionsGroup.failure, (state: ITagsState) => ({
      ...state,
      isLoading: false,
    })),
  ),
});
