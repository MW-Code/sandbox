import { TestBed } from '@angular/core/testing';

import { GlobelsService } from './globels.service';

describe('GlobelsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobelsService = TestBed.get(GlobelsService);
    expect(service).toBeTruthy();
  });
});
