import { TestBed } from '@angular/core/testing';

import { StatsJoueurService } from './stats-joueur.service';

describe('StatsJoueurService', () => {
  let service: StatsJoueurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatsJoueurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
