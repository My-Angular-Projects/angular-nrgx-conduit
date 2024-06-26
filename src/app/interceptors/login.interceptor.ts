import {
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { PersistenceService } from '../services';

export const loginInterceptor: HttpInterceptorFn = (
  request: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> => {
  const token = inject(PersistenceService).getToken();

  const clonedRequest = request.clone({
    setHeaders: {
      Authorization: token ? `Bearer ${token}` : '',
    },
  });

  return next(clonedRequest);
};
