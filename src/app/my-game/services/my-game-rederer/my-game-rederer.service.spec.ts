import { TestBed, inject } from '@angular/core/testing';

import { MyGameRedererService } from './my-game-rederer.service';

describe('MyGameRedererService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyGameRedererService]
    });
  });

  it('should be created', inject([MyGameRedererService], (service: MyGameRedererService) => {
    expect(service).toBeTruthy();
  }));
});
