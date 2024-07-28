import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Options, User } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  get<T>(url: string, options: Options) {
    return this.httpClient.get(url, options) as Observable<T>;
  }

  post<T>(url: string, body: User, options: Options) {
    return this.httpClient.post(url, body, options) as Observable<T>;
  }
}
