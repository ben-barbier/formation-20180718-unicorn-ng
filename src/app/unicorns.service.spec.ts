import { TestBed, inject } from '@angular/core/testing';

import { CartService } from './unicorns.service';

describe('CartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartService]
    });
  });

  it('should be created', inject([CartService], (service: CartService) => {
    expect(service).toBeTruthy();
  }));
});
