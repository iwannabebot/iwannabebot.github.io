import { TestBed, inject } from '@angular/core/testing';

import { MyGameStoryService } from './my-game-story.service';

describe('MyGameStoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyGameStoryService]
    });
  });

  it('should be created', inject([MyGameStoryService], (service: MyGameStoryService) => {
    expect(service).toBeTruthy();
  }));
});
