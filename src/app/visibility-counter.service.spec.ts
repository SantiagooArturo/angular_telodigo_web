import { TestBed } from '@angular/core/testing';

import { VisibilityCounterService } from './visibility-counter.service';

describe('VisibilityCounterService', () => {
  let service: VisibilityCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisibilityCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
