import { TestBed } from '@angular/core/testing';

import { ProdserService } from './prodser.service';

describe('ProdserService', () => {
  let service: ProdserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
