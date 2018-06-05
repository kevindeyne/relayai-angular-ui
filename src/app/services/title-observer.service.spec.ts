import { TestBed, inject } from '@angular/core/testing';

import { TitleObserverService } from './title-observer.service';

describe('TitleObserverServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TitleObserverService]
    });
  });

  it('should be created', inject([TitleObserverService], (service: TitleObserverService) => {
    expect(service).toBeTruthy();
  }));
});
