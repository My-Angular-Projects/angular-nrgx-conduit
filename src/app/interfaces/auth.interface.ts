export interface IUserLogin {
  username: string;
  password: string;
}

export interface IUserRegister extends IUserLogin {
  email: string;
}

export interface IAuthState {
  user: IUserRegister;
  isSubmitting: boolean;
}
