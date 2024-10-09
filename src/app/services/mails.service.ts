import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ComposeMailPayload } from '../../types';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class MailsService {
  composeEmailUrl = 'http://localhost:8000/mail/compose';

  constructor(private apiService: ApiService) {}

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
