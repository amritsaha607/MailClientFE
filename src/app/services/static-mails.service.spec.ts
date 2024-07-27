import { TestBed } from '@angular/core/testing';

import { StaticMailsService } from './static-mails.service';

describe('StaticMailsService', () => {
  let service: StaticMailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaticMailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
