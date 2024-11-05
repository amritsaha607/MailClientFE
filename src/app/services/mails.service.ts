import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ComposeMailPayload, FetchEmailPayload } from '../../types';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class MailsService {
  fetchEmailUrl = 'http://localhost:8000/mails';
  composeEmailUrl = 'http://localhost:8000/mail/compose';

  constructor(private apiService: ApiService) {}

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
