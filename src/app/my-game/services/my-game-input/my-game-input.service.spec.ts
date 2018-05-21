import { TestBed, inject } from '@angular/core/testing';

import { MyGameInputService } from './my-game-input.service';

describe('MyGameInputService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyGameInputService]
    });
  });

  it('should be created', inject([MyGameInputService], (service: MyGameInputService) => {
    expect(service).toBeTruthy();
  }));
});
