import { TestBed } from '@angular/core/testing';

import { MessagingNgrxService } from './messaging-ngrx.service';

describe('MessagingNgrxService', () => {
  let service: MessagingNgrxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessagingNgrxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
