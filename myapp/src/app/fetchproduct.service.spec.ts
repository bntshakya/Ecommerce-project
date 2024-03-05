import { TestBed } from '@angular/core/testing';

import { FetchproductService } from './fetchproduct.service';

describe('FetchproductService', () => {
  let service: FetchproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
