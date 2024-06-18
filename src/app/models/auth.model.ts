import { IUserRegister } from '@interfaces';

export class UserRegisterModel implements IUserRegister {
  constructor(
    public username: string,
    public password: string,
    public email: string,
  ) {}
}

export class AuthStateModel {
  constructor(public user: IUserRegister) {}
}
