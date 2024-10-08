import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComposeMailPayload, Mail, User } from '../../../types';
import { MailComponseButtonComponent } from '../../components/mail-componse-button/mail-componse-button.component';
import { MailComponsePopupComponent } from '../../components/mail-componse-popup/mail-componse-popup.component';
import { MailLineComponent } from '../../components/mail-line/mail-line.component';
import { MailOpenedComponent } from '../../components/mail-opened/mail-opened.component';
import { SessionService } from '../../services/session.service';
import { StaticMailsService } from '../../services/static-mails.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MailLineComponent,
    CommonModule,
    MailOpenedComponent,
    MailComponseButtonComponent,
    MailComponsePopupComponent,
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

  spawnMailComposePopup() {
    this.spawnedDrafts.push(this.spawnedDraftIndex);
    this.spawnedDraftIndex++;
  }

  removeMailComposePopup(index: number) {
    const indexInDraftArray = this.spawnedDrafts.indexOf(index);
    this.spawnedDrafts.splice(indexInDraftArray, 1);
  }

  composeNewEmail(payload: ComposeMailPayload) {
    payload.sender = this.user.email;
  }
}
