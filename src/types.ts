import { HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';

export interface Mail {
  subject: string;
  sender: User;
  content?: string;
  timestamp: Date;
}

export interface FormItem {
  id?: string;
  name?: string;
  title?: string;
  placeholder?: string;
  inputType?: string;
}

export interface User {
  name?: string;
  email: string;
  password?: string;
  dob?: string;
}

export interface Options {
  headers?:
    | HttpHeaders
    | {
        [header: string]: string | string[];
      };
  context?: HttpContext;
  observe: 'response';
  params?:
    | HttpParams
    | {
        [param: string]:
          | string
          | number
          | boolean
          | ReadonlyArray<string | number | boolean>;
      };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
  transferCache?:
    | {
        includeHeaders?: string[];
      }
    | boolean;
}

// Fetch emails API payload
export interface FetchEmailPayload {
  ids?: string[];
  receivers?: string[];
  senders?: string[];
  latest_first?: boolean;
}

// Compose email API payload
export interface ComposeMailPayload {
  id: string;
  sender: string;
  receivers: string[];
  subject: string;
  content?: string;
  timestamp: Date;
}
