export interface IResponsePopularTag {
  response: PopularTag[];
}

export interface ITagsState {
  isLoading: boolean;
  data: PopularTag[];
  errors: string | null;
}

export type PopularTag = string;
