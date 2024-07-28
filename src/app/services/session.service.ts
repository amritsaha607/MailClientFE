import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor(private authService: AuthService) {}

  getSessionUser() {
    const activeEmail = sessionStorage.getItem('activeUser');
    if (activeEmail) {
      return this.authService.getUser(activeEmail);
    }
    return null;
  }

  setUserSession(email: string) {
    sessionStorage.setItem('activeUser', email);
  }
}
