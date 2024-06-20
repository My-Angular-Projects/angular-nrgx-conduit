import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import {
  IAuthRequestUser,
  IAuthResponseUser,
  ICurrentUser,
  IUserRegister,
} from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);

  /**
   * Register new user
   * @param {IUserRegister} user
   */
  signup(user: IUserRegister): Observable<ICurrentUser> {
    const url = `${environment.baseUrl}users`;
    const body: IAuthRequestUser = {
      user,
    };

    return this.http
      .post<IAuthResponseUser>(url, body)
      .pipe(map((response: IAuthResponseUser) => response.user));
  }
}
