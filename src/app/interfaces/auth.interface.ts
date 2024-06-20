import { ICurrentUser } from './current-user.interface';
import { IBackendErrors } from './backend-errors.interface';

export interface IUserLogin {
  username: string;
  password: string;
}

export interface IUserRegister extends IUserLogin {
  email: string;
}

export interface IAuthRequestUser {
  user: IUserRegister;
}

export interface IAuthResponseUser {
  user: ICurrentUser;
}

export interface IAuthState {
  user: ICurrentUser | null;
  isSubmitting: boolean;
  isLoggingIn: boolean | null;
  errors: IBackendErrors | null;
}
