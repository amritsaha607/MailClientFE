import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ComposeMailPayload, FetchEmailPayload, Mail, User } from '../../types';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class MailsService {
  // sends live update to home component for list of emails
  mailsSubject: BehaviorSubject<Mail[]> = new BehaviorSubject<Mail[]>([]);

  fetchEmailUrl = 'http://localhost:8000/mails';
  composeEmailUrl = 'http://localhost:8000/mail/compose';

  constructor(private apiService: ApiService) {}

  initializeMails(user: User) {
    const payload: FetchEmailPayload = {
      receivers: [user.email],
      latest_first: true,
    };
    var mails: Mail[] = [];
    this.fetchEmail(payload).subscribe((response) => {
      if (response.status == 200) {
        mails = response.body;
        mails.forEach((mail) => {
          mail.timestamp = new Date(mail.timestamp);
        });
        this.mailsSubject.next(mails);
      } else {
        console.error('Failed to fetch email');
      }
    });
  }

  prependNewEmail(mail: Mail) {
    var mails = this.mailsSubject.value;
    mails.unshift(mail);
    this.mailsSubject.next(mails);
  }

  fetchEmail(payload: FetchEmailPayload) {
    return this.apiService.post<HttpResponse<any>>(
      this.fetchEmailUrl,
      payload,
      {
        observe: 'response',
      }
    );
  }

  composeEmail(payload: ComposeMailPayload) {
    return this.apiService.post<HttpResponse<any>>(
      this.composeEmailUrl,
      payload,
      {
        observe: 'response',
      }
    );
  }
}
