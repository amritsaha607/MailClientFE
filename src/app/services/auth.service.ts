import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../types';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = 'http://localhost:8000/users';
  authUrl = 'http://localhost:8000/auth';

  constructor(private apiService: ApiService) {}

  signupUser(user: User) {
    const stringifiedJson = JSON.stringify(user);
    const jsonData = JSON.parse(stringifiedJson);
    jsonData.auth_mode = 'signup';
    return this.apiService.post<HttpResponse<any>>(this.authUrl, jsonData, {
      observe: 'response',
    });
  }

  loginUser(email: string, password: string) {
    return this.apiService.post<HttpResponse<any>>(
      this.authUrl,
      {
        email: email,
        password: password,
        auth_mode: 'login',
      },
      {
        observe: 'response',
      }
    );
  }

  getUser(email: string) {
    return this.apiService.get<HttpResponse<any>>(this.url, {
      params: {
        email: email,
      },
      observe: 'response',
    });
  }
}
