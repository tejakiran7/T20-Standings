import { TestBed } from '@angular/core/testing';

import { T20ServiceService } from './t20-service.service';

describe('T20ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: T20ServiceService = TestBed.get(T20ServiceService);
    expect(service).toBeTruthy();
  });
});
