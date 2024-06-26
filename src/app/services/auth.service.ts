import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import {
  IAuthRequestUser,
  IAuthResponseUser,
  ICurrentUser,
  IUserLogin,
  IUserRegister,
  IUserRequestLogin,
} from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);

  /**
   * Register new user
   * @param {IUserRegister} userRegister
   */
  public signup(userRegister: IUserRegister): Observable<ICurrentUser> {
    const url = `${environment.baseUrl}users`;
    const body: IAuthRequestUser = {
      user: { ...userRegister },
    };

    return this.http
      .post<IAuthResponseUser>(url, body)
      .pipe(map(this.getUserMapper));
  }

  /**
   * Login existing user
   * @param {IUserLogin} userLogin
   */
  public signin(userLogin: IUserLogin): Observable<ICurrentUser> {
    const url = `${environment.baseUrl}users/login`;
    const body: IUserRequestLogin = {
      user: { ...userLogin },
    };

    return this.http
      .post<IAuthResponseUser>(url, body)
      .pipe(map(this.getUserMapper));
  }

  /**
   * Get existing user by auth token
   */
  public getCurrentUser(): Observable<ICurrentUser> {
    const url = `${environment.baseUrl}user`;

    return this.http.get<IAuthResponseUser>(url).pipe(map(this.getUserMapper));
  }

  /**
   * Mapper
   * @private
   * @param response
   */
  private getUserMapper(response: IAuthResponseUser): ICurrentUser {
    return response.user;
  }
}
