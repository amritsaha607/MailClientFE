import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Mail, User } from '../../../types';
import { MailLineComponent } from '../../components/mail-line/mail-line.component';
import { MailOpenedComponent } from '../../components/mail-opened/mail-opened.component';
import { SessionService } from '../../services/session.service';
import { StaticMailsService } from '../../services/static-mails.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MailLineComponent, CommonModule, MailOpenedComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  user!: User;
  selectedMail!: Mail;
  mails: Mail[] = [];

  constructor(
    private staticMailsService: StaticMailsService,
    private sessionService: SessionService
  ) {}

  ngOnInit() {
    this.mails = this.staticMailsService.getStaticMails();
    if (this.sessionService.checkUserInSession() == false) {
      window.location.href = 'login';
    } else {
      this.user = JSON.parse(this.sessionService.getSessionUser() ?? '');
    }
  }

  openMailContent(mail: Mail) {
    this.selectedMail = mail;
  }
}
