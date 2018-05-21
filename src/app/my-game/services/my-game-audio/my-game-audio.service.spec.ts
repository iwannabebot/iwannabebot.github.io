import { TestBed, inject } from '@angular/core/testing';

import { MyGameAudioService } from './my-game-audio.service';

describe('MyGameAudioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyGameAudioService]
    });
  });

  it('should be created', inject([MyGameAudioService], (service: MyGameAudioService) => {
    expect(service).toBeTruthy();
  }));
});
