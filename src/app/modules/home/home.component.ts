import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComposeMailPayload, Mail, User } from '../../../types';
import { MailComposeButtonComponent } from '../../components/mail-compose-button/mail-compose-button.component';
import { MailComposePopupComponent } from '../../components/mail-compose-popup/mail-compose-popup.component';
import { MailLineComponent } from '../../components/mail-line/mail-line.component';
import { MailOpenedComponent } from '../../components/mail-opened/mail-opened.component';
import { MailsService } from '../../services/mails.service';
import { SessionService } from '../../services/session.service';
import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MailLineComponent,
    CommonModule,
    MailOpenedComponent,
    MailComposeButtonComponent,
    MailComposePopupComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  user!: User;
  selectedMail!: Mail;
  mails: Mail[] = [];
  spawnedDraftIndex = 0;
  spawnedDrafts: number[] = [];

  constructor(
    private sessionService: SessionService,
    private mailsService: MailsService,
    private socketService: SocketService
  ) {}

  ngOnInit() {
    if (this.sessionService.checkUserInSession() == false) {
      window.location.href = 'login';
      return;
    }
    this.user = JSON.parse(this.sessionService.getSessionUser() ?? '');
    this.mailsService.initializeMails(this.user);
    this.mailsService.mailsSubject.subscribe((mails) => {
      this.mails = mails;
    });

    this.socketService.initializeSocket(this.user.email);
  }

  openMailContent(mail: Mail) {
    this.selectedMail = mail;
  }

  spawnMailComposePopup() {
    this.spawnedDrafts.push(this.spawnedDraftIndex);
    this.spawnedDraftIndex++;
  }

  removeMailComposePopup(index: number) {
    const indexInDraftArray = this.spawnedDrafts.indexOf(index);
    this.spawnedDrafts.splice(indexInDraftArray, 1);
  }

  composeNewEmail(incomingTuple: [number, ComposeMailPayload]) {
    const payload = incomingTuple[1];
    const spawnedDraftIndex = incomingTuple[0];
    payload.sender = this.user.email;
    return this.mailsService.composeEmail(payload).subscribe((response) => {
      if (response.status == 200) {
        this.removeMailComposePopup(spawnedDraftIndex);
      } else {
        console.error('Failed to send email');
      }
    });
  }
}
