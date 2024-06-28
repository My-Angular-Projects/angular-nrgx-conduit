export interface IProfile {
  username: string;
  bio: null;
  image: string;
  following: boolean;
}

export interface IArticle {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: IProfile;
}

export interface IFeed {
  articles: IArticle[];
  articlesCount: number;
}

export interface IFeedState {
  isLoading: boolean;
  data: IFeed | null;
  errors: string | null;
  articlesLimit: number;
}
