import { TestBed } from '@angular/core/testing';

import { MonthliesService } from './monthlies.service';

describe('MonthliesService', () => {
  let service: MonthliesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonthliesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
