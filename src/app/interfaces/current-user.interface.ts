export interface IRegisteredUser {
  id: number | null;
  email: string;
  username: string;
  bio: null;
  image: string;
}

export interface ICurrentUser extends IRegisteredUser {
  token: string;
}
