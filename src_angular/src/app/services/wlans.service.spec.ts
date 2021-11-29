import { TestBed } from '@angular/core/testing';

import { WlansService } from './wlans.service';

describe('WlansService', () => {
  let service: WlansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WlansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
