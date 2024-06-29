import { IAuthState } from './auth.interface';
import { IFeedState } from './feed.interface';
import { ITagsState } from './tags.interface';

export interface IGlobalState {
  auth: IAuthState;
  feeds: IFeedState;
  tags: ITagsState;
}
