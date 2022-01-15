import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { delay, Observable, of, throwError } from 'rxjs';

@Injectable()
export class BackendInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const { url, method, body } = request;

    if (url.endsWith('/login') && method === 'POST') {
      const { email } = body as { email: string };
      if (email === 'a@a') {
        return throwError({ status: 401, error: { message: { status: 401 } } });
      }
      return of(
        new HttpResponse({
          status: 200,
          body: { authToken: 'asdfhkja7at8sdf', success: true },
        })
      ).pipe(delay(500));
    }

    return next.handle(request);

    // console.log(url);
    //
    // const handleRoute = (() => {
    //   switch (true) {
    //     case url.endsWith('/login') && method === 'POST':
    //       return () => {
    //         const { email } = body as { email: string };
    //         if (email === 'a@a') {
    //           return throwError({ status: 401, error: { message: 'Unauthorised' } });
    //         }
    //         return of(new HttpResponse({ status: 200, body: { authToken: 'asdfhkja7at8sdf' } }));
    //       };
    //
    //     default:
    //       return next.handle(request);
    //   }
    // }) as (value: null, index: number) => ObservableInput<HttpEvent<unknown>>;
    //
    // return of(null).pipe(mergeMap(handleRoute)).pipe(materialize()).pipe(delay(500)).pipe(dematerialize());
  }
}
