import { TestBed } from '@angular/core/testing';

import { Common1Service } from './common1.service';

describe('Common1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Common1Service = TestBed.get(Common1Service);
    expect(service).toBeTruthy();
  });
});
