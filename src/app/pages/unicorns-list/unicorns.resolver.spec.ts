import { TestBed, async, inject } from '@angular/core/testing';

import { UnicornsResolver } from './unicorns.resolver';

describe('UnicornsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnicornsResolver]
    });
  });

  it('should ...', inject([UnicornsResolver], (guard: UnicornsResolver) => {
    expect(guard).toBeTruthy();
  }));
});
