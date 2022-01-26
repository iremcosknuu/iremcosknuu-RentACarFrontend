/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AditionalServiceService } from './additionalService.service';

describe('Service: AditionalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AditionalServiceService]
    });
  });

  it('should ...', inject([AditionalServiceService], (service: AditionalServiceService) => {
    expect(service).toBeTruthy();
  }));
});
