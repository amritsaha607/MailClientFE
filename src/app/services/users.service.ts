import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailListPayload } from '../../types';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  search_emails_url = 'http://localhost:8000/users/search-by-email';

  constructor(private apiService: ApiService) {}

  fetchEmailListByQuery(query: string) {
    return this.apiService.get<HttpResponse<EmailListPayload>>(
      this.search_emails_url,
      {
        params: {
          query: query,
        },
        observe: 'response',
      }
    );
  }
}
