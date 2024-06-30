export type PopularTag = string;

export interface IResponsePopularTag {
  tags: PopularTag[];
}

export interface ITagsState {
  isLoading: boolean;
  data: PopularTag[];
  errors: string | null;
}
