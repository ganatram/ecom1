import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MyHttpInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    return next
      .handle(req)

      .pipe(
        catchError((err) => {
          console.error('error caught in interceptor', err);
          return throwError(err);
        }),
      );
  }
}
