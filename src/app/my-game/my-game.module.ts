import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyGameBoardComponent } from './my-game-board/my-game-board.component';
import { MyGameEngineService } from './services/my-game-engine/my-game-engine.service';
import { MyGameInputService } from './services/my-game-input/my-game-input.service';
import { MyGameAudioService } from './services/my-game-audio/my-game-audio.service';
import { MyGameStoryService } from './services/my-game-story/my-game-story.service';
import { MyGameGraphicsService } from './services/my-game-graphics/my-game-graphics.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MyGameBoardComponent
  ],
  declarations: [
    MyGameBoardComponent
  ],
  providers: [
    MyGameGraphicsService,
    MyGameStoryService,
    MyGameEngineService,
    MyGameInputService,
    MyGameAudioService
  ]
})
export class MyGameModule { }
