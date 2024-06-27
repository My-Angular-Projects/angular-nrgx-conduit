import { IAuthState } from './auth.interface';
import { IFeedState } from './feed.interface';

export interface IGlobalState {
  auth: IAuthState;
  feeds: IFeedState;
}
