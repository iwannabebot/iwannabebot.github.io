import { TestBed, inject } from '@angular/core/testing';

import { MyGamePhysicsService } from './my-game-physics.service';

describe('MyGamePhysicsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyGamePhysicsService]
    });
  });

  it('should be created', inject([MyGamePhysicsService], (service: MyGamePhysicsService) => {
    expect(service).toBeTruthy();
  }));
});
