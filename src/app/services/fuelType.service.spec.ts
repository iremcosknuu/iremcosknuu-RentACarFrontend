/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FuelTypeService } from './fuelType.service';

describe('Service: FuelType', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FuelTypeService]
    });
  });

  it('should ...', inject([FuelTypeService], (service: FuelTypeService) => {
    expect(service).toBeTruthy();
  }));
});
