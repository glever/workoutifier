import { TestBed } from '@angular/core/testing';

import { DongleNgrxService } from './dongle-ngrx.service';

describe('DongleNgrxService', () => {
  let service: DongleNgrxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DongleNgrxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
