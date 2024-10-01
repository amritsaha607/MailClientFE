import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CSRFInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.method.toUpperCase() === 'GET') {
      return next.handle(req);
    }

    const cookieheaderName = 'X-CSRFToken';
    const csrfToken = document.cookie.split('=')[1];

    if (csrfToken !== null && !req.headers.has(cookieheaderName)) {
      req = req.clone({
        headers: req.headers.set(cookieheaderName, csrfToken),
      });
    }

    return next.handle(req);
  }
}
