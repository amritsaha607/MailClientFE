import { Injectable } from '@angular/core';
import { User } from '../../types';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = 'http://localhost:8000/users';

  constructor(private apiService: ApiService) {}

  createUser(user: User) {
    return this.apiService.post(this.url, user, {});
  }

  loginUser(user: User) {
    this.apiService.get(this.url, {
      params: {
        email: user.email,
        password: user.password ?? '',
      },
    });
  }
}
