import { TestBed, inject } from '@angular/core/testing';

import { InsuranceserviceService } from './insuranceservice.service';

describe('InsuranceserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InsuranceserviceService]
    });
  });

  it('should be created', inject([InsuranceserviceService], (service: InsuranceserviceService) => {
    expect(service).toBeTruthy();
  }));
});
