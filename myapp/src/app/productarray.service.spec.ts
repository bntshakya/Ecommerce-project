import { TestBed } from '@angular/core/testing';

import { ProductarrayService } from './productarray.service';

describe('ProductarrayService', () => {
  let service: ProductarrayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductarrayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
