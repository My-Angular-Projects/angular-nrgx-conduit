import { IUserLogin, IUserRegister } from '../interfaces';

export class UserRegisterModel implements IUserRegister {
  constructor(
    public username: string,
    public password: string,
    public email: string,
  ) {}
}

export class UserLoginModel implements IUserLogin {
  constructor(
    public email: string,
    public password: string,
  ) {}
}

export class AuthStateModel {
  constructor(public user: IUserRegister) {}
}
