import { ICurrentUser, IRegisteredUser } from './current-user.interface';
import { IBackendErrors } from './backend-errors.interface';

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserRegister extends IUserLogin {
  username: string;
}

export interface IUserRequestLogin {
  user: IUserLogin;
}

export interface IAuthRequestUser {
  user: IUserRegister;
}

export interface IAuthResponseUser {
  user: ICurrentUser;
}

export interface IAuthState {
  user: IRegisteredUser | null;
  isSubmitting: boolean;
  isLoading: boolean;
  isLoggingIn: boolean | null;
  errors: IBackendErrors | null;
}
