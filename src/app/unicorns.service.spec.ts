import { TestBed, inject } from '@angular/core/testing';

import { UnicornsService } from './unicorns.service';

describe('UnicornsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnicornsService]
    });
  });

  it('should be created', inject([UnicornsService], (service: UnicornsService) => {
    expect(service).toBeTruthy();
  }));
});
