import { TestBed, async, inject } from '@angular/core/testing';

import { MagicalUnicornGuard } from './magical-unicorn.guard';

describe('MagicalUnicornGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagicalUnicornGuard]
    });
  });

  it('should ...', inject([MagicalUnicornGuard], (guard: MagicalUnicornGuard) => {
    expect(guard).toBeTruthy();
  }));
});
