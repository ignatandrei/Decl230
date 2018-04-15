import { TestBed, inject } from '@angular/core/testing';

import { ExchangeDataService } from './exchange-data.service';

describe('ExchangeDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExchangeDataService]
    });
  });

  it('should be created', inject([ExchangeDataService], (service: ExchangeDataService) => {
    expect(service).toBeTruthy();
  }));
});
