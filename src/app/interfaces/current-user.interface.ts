export interface IRegisteredUser {
  email: string;
  username: string;
  bio: null;
  image: string;
  id?: number | null;
}

export interface ICurrentUser extends IRegisteredUser {
  token: string;
}
