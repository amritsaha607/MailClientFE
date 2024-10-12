import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComposeMailPayload, Mail, User } from '../../../types';
import { MailComposeButtonComponent } from '../../components/mail-compose-button/mail-compose-button.component';
import { MailComposePopupComponent } from '../../components/mail-compose-popup/mail-compose-popup.component';
import { MailLineComponent } from '../../components/mail-line/mail-line.component';
import { MailOpenedComponent } from '../../components/mail-opened/mail-opened.component';
import { MailsService } from '../../services/mails.service';
import { SessionService } from '../../services/session.service';
import { StaticMailsService } from '../../services/static-mails.service';

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
    private staticMailsService: StaticMailsService,
    private sessionService: SessionService,
    private mailsService: MailsService
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
