import { ICurrentUser, IRegisteredUser } from './current-user.interface';
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
  user: IRegisteredUser | null;
  isSubmitting: boolean;
  isLoggingIn: boolean | null;
  errors: IBackendErrors | null;
}
