import { TestBed, inject } from '@angular/core/testing';

import { MyGameEngineService } from './my-game-engine.service';

describe('MyGameEngineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyGameEngineService]
    });
  });

  it('should be created', inject([MyGameEngineService], (service: MyGameEngineService) => {
    expect(service).toBeTruthy();
  }));
});
