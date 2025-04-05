import { TestBed } from '@angular/core/testing';

import { StadesService } from './stades.service';

describe('StadesService', () => {
  let service: StadesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StadesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
