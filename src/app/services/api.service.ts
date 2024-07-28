import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Options } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  handleError(err: HttpErrorResponse) {
    return of(
      new HttpResponse({
        body: err.error,
        status: err.status,
        statusText: err.statusText,
      })
    );
  }

  get<T>(url: string, options: Options) {
    return this.httpClient
      .get(url, options)
      .pipe(catchError((err) => this.handleError(err))) as Observable<T>;
  }

  post<T>(url: string, body: any, options: Options) {
    return this.httpClient
      .post(url, body, options)
      .pipe(catchError((err) => this.handleError(err))) as Observable<T>;
  }
}
