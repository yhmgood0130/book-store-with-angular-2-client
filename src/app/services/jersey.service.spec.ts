import { TestBed, inject } from '@angular/core/testing';

import { JerseyService } from './jersey.service';

describe('JerseyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JerseyService]
    });
  });

  it('should be created', inject([JerseyService], (service: JerseyService) => {
    expect(service).toBeTruthy();
  }));
});
