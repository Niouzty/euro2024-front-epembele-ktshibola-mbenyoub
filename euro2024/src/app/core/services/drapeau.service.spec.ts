import { TestBed } from '@angular/core/testing';

import { DrapeauService } from './drapeau.service';

describe('DrapeauService', () => {
  let service: DrapeauService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrapeauService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
