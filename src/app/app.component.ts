import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from '../types';
import { HeaderComponent } from './layout/header/header.component';
import { SessionService } from './services/session.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'MailClientFE';
  user!: User;
  initials = '-_-';

  constructor(private sessionService: SessionService) {}

  ngOnInit() {
    this.fetchSessionUser();
  }

  fetchSessionUser() {
    this.sessionService.getSessionUser()?.subscribe((response) => {
      if (response.status == 200) {
        this.user = response.body;
        this.setInitials();
      }
    });
  }

  setInitials() {
    if (
      this.user != null &&
      this.user != undefined &&
      this.user.name != null &&
      this.user.name != undefined
    ) {
      this.initials = this.getInitialsFromName(this.user.name);
    }
  }

  getInitialsFromName(name: string) {
    const splitFront = name.split(' ').at(0);
    const splitBack = name.split(' ').at(-1);
    if (splitFront != undefined) {
      this.initials = splitFront[0];
    }
    if (splitBack != undefined) {
      this.initials += splitBack[0];
    }
    return this.initials;
  }
}
