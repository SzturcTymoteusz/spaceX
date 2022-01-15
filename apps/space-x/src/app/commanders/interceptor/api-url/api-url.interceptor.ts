import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiUrlInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (req.url.split('//')[0].includes('https:')) {
      return next.handle(req);
    }

    const newRequest = req.clone({
      url: `${environment.apiUrl}/${req.url}`,
    });
    return next.handle(newRequest);
  }
}
