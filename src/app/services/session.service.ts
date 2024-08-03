import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor(private authService: AuthService) {}

  checkUserInSession() {
    const activeUser = sessionStorage.getItem('activeUser');
    return activeUser ? true : false;
  }

  getSessionUser() {
    return sessionStorage.getItem('activeUser');
  }

  setUserSession(email: string) {
    this.authService.getUser(email)?.subscribe((response) => {
      if (response.status == 200) {
        sessionStorage.setItem('activeUser', JSON.stringify(response.body));
      }
    });
  }

  removeUserFromSession() {
    sessionStorage.removeItem('activeUser');
  }
}
