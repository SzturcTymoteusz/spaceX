import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Authentication } from '../../auth/authentication/authentication';
import { environment } from '../../../../environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authentication: Authentication) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const user = this.authentication.user;
    const isApiUrl = request.url.startsWith(environment.apiUrl);

    if (user?.authToken && isApiUrl) {
      request = request.clone({
        setHeaders: {
          Authorization: `Basic ${user.authToken}`,
        },
      });
    }

    return next.handle(request);
  }
}
