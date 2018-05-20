import { TestBed, inject } from '@angular/core/testing';

import { MyGameGraphicsService } from './my-game-graphics.service';

describe('MyGameGraphicsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyGameGraphicsService]
    });
  });

  it('should be created', inject([MyGameGraphicsService], (service: MyGameGraphicsService) => {
    expect(service).toBeTruthy();
  }));
});
