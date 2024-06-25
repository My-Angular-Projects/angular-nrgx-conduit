import {
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
// import { inject } from '@angular/core';
// import { PersistenceService } from '../services';
import { Observable } from 'rxjs';

export const loginInterceptor: HttpInterceptorFn = (
  request: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> => {
  // const token = inject(PersistenceService).getToken();

  // if (request.method === 'POST' && request.url === 'users/login') {
  //   const clonedRequest = request.clone({
  //     setHeaders: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  //
  //   return next(clonedRequest);
  // }

  return next(request);
};
