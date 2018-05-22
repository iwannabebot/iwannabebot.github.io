import { Injectable } from '@angular/core';
import { MyGameStoryService } from '../my-game-story/my-game-story.service';
import { MyGameGraphicsService } from '../my-game-graphics/my-game-graphics.service';
import { SpriteSheetType } from '../../models/graphics/sprite';

@Injectable()
export class MyGameEngineService {


  private _story: MyGameStoryService = null;
  private _graphics: MyGameGraphicsService

  constructor() { }

  public init(story: MyGameStoryService, graphics: MyGameGraphicsService) {
    this._story = story;
    this._graphics = graphics;
    this.gameLoop();
  }

  public gameLoop() {
    if (this != null && this._graphics != null) {
      this._graphics._board.drawImage(SpriteSheetType.liquidWater, 0, 1);
      this._graphics._board.drawImage(SpriteSheetType.grassLeft, 1, 1);
      this._graphics._board.drawImage(SpriteSheetType.grassMid, 2, 1);
      this._graphics._board.drawImage(SpriteSheetType.grassMid, 3, 1);
      this._graphics._board.drawImage(SpriteSheetType.grassRight, 4, 1);
      this._graphics._board.drawImage(SpriteSheetType.grassCenter, 5, 1);
      this._graphics._board.drawImage(SpriteSheetType.grassCenter, 6, 1);
      this._graphics._board.drawImage(SpriteSheetType.liquidWater, 7, 1);
      this._graphics._board.drawImage(SpriteSheetType.liquidWater, 8, 1);
      this._graphics._board.drawImage(SpriteSheetType.liquidWater, 9, 1);
      this._graphics._board.drawImage(SpriteSheetType.liquidWater, 10, 1);
      this._graphics._board.drawImage(SpriteSheetType.grassCenter, 11, 1);
      this._graphics._board.drawImage(SpriteSheetType.grassCenter, 12, 1);
      this._graphics._board.drawImage(SpriteSheetType.grassCenter, 13, 1);
      this._graphics._board.drawImage(SpriteSheetType.grassCenter, 14, 1);
      this._graphics._board.drawImage(SpriteSheetType.grassCenter, 15, 1);
      this._graphics._board.drawImage(SpriteSheetType.grassCenter, 16, 1);
      this._graphics._board.drawImage(SpriteSheetType.grassCenter, 17, 1);
      this._graphics._board.drawImage(SpriteSheetType.liquidWater, 18, 1);
      this._graphics._board.drawImage(SpriteSheetType.liquidWater, 19, 1);

      //this._graphics._board.drawImage(SpriteSheetType.liquidWater, 0, 2);
      //this._graphics._board.drawImage(SpriteSheetType.grassLeft, 1, 2);
      this._graphics._board.drawImage(SpriteSheetType.grassLeft, 2, 2);
      this._graphics._board.drawImage(SpriteSheetType.grassMid, 3, 2);
      this._graphics._board.drawImage(SpriteSheetType.grassMid, 4, 2);
      this._graphics._board.drawImage(SpriteSheetType.grassMid, 5, 2);
      this._graphics._board.drawImage(SpriteSheetType.grassRight, 6, 2);
      this._graphics._board.drawImage(SpriteSheetType.liquidWaterTopmid, 7, 2);
      this._graphics._board.drawImage(SpriteSheetType.liquidWaterTopmid, 8, 2);
      this._graphics._board.drawImage(SpriteSheetType.liquidWaterTopmid, 9, 2);
      this._graphics._board.drawImage(SpriteSheetType.liquidWaterTopmid, 10, 2);
      this._graphics._board.drawImage(SpriteSheetType.grassCenter, 11, 2);
      this._graphics._board.drawImage(SpriteSheetType.grassCenter, 12, 2);
      this._graphics._board.drawImage(SpriteSheetType.grassCenter, 13, 2);
      this._graphics._board.drawImage(SpriteSheetType.grassCenter, 14, 2);
      this._graphics._board.drawImage(SpriteSheetType.grassCenter, 15, 2);
      this._graphics._board.drawImage(SpriteSheetType.grassCenter, 16, 2);
      this._graphics._board.drawImage(SpriteSheetType.grassCenter, 17, 2);
      this._graphics._board.drawImage(SpriteSheetType.liquidWater, 18, 2);
      this._graphics._board.drawImage(SpriteSheetType.liquidWater, 19, 2);

      //this._graphics._board.drawImage(SpriteSheetType.liquidWater, 0, 3);
      //this._graphics._board.drawImage(SpriteSheetType.grassLeft, 1, 3);
      this._graphics._board.drawImage(SpriteSheetType.signRight, 2, 3);
      //this._graphics._board.drawImage(SpriteSheetType.signRight, 3, 3);
      this._graphics._board.drawImage(SpriteSheetType.fence, 4, 3);
      this._graphics._board.drawImage(SpriteSheetType.fence, 5, 3);
      // this._graphics._board.drawImage(SpriteSheetType.grassRight, 6, 3);
      // this._graphics._board.drawImage(SpriteSheetType.liquidWaterTopmid, 7, 3);
      // this._graphics._board.drawImage(SpriteSheetType.liquidWaterTopmid, 8, 3);
      // this._graphics._board.drawImage(SpriteSheetType.liquidWaterTopmid, 9, 3);
      // this._graphics._board.drawImage(SpriteSheetType.liquidWaterTopmid, 10, 3);
      this._graphics._board.drawImage(SpriteSheetType.grassCenter, 11, 3);
      this._graphics._board.drawImage(SpriteSheetType.grassCenter, 12, 3);
      this._graphics._board.drawImage(SpriteSheetType.grassCenter, 13, 3);
      this._graphics._board.drawImage(SpriteSheetType.grassCenter, 14, 3);
      this._graphics._board.drawImage(SpriteSheetType.grassLeft, 15, 3);
      this._graphics._board.drawImage(SpriteSheetType.grassMid, 16, 3);
      this._graphics._board.drawImage(SpriteSheetType.grassRight, 17, 3);
      // this._graphics._board.drawImage(SpriteSheetType.liquidWater, 18, 3);
      // this._graphics._board.drawImage(SpriteSheetType.liquidWater, 19, 3);

      //this._graphics._board.drawImage(SpriteSheetType.liquidWater, 0, 4);
      //this._graphics._board.drawImage(SpriteSheetType.grassLeft, 1, 4);
      //this._graphics._board.drawImage(SpriteSheetType.grassLeft, 2, 4);
      // this._graphics._board.drawImage(SpriteSheetType.fence, 3, 4);
      // this._graphics._board.drawImage(SpriteSheetType.grassMid, 4, 4);
      // this._graphics._board.drawImage(SpriteSheetType.grassMid, 5, 4);
      // this._graphics._board.drawImage(SpriteSheetType.grassRight, 6, 4);
      // this._graphics._board.drawImage(SpriteSheetType.liquidWaterTopmid, 7, 4);
      // this._graphics._board.drawImage(SpriteSheetType.liquidWaterTopmid, 8, 4);
      // this._graphics._board.drawImage(SpriteSheetType.liquidWaterTopmid, 9, 4);
      this._graphics._board.drawImage(SpriteSheetType.grassCliffLeft, 10, 4);
      this._graphics._board.drawImage(SpriteSheetType.grassMid, 11, 4);
      this._graphics._board.drawImage(SpriteSheetType.grassMid, 12, 4);
      this._graphics._board.drawImage(SpriteSheetType.grassHillLeft2, 13, 4);
      this._graphics._board.drawImage(SpriteSheetType.grassCenter, 14, 4);
      this._graphics._board.drawImage(SpriteSheetType.grassCenter, 15, 4);
      this._graphics._board.drawImage(SpriteSheetType.grassCenter, 16, 4);
      // this._graphics._board.drawImage(SpriteSheetType.grassRight, 17, 4);
      // this._graphics._board.drawImage(SpriteSheetType.liquidWater, 18, 4);
      // this._graphics._board.drawImage(SpriteSheetType.liquidWater, 19, 4);

      //this._graphics._board.drawImage(SpriteSheetType.liquidWater, 0, 5);
      //this._graphics._board.drawImage(SpriteSheetType.grassLeft, 1, 5);
      //this._graphics._board.drawImage(SpriteSheetType.grassLeft, 2, 5);
      // this._graphics._board.drawImage(SpriteSheetType.fence, 3, 5);
      // this._graphics._board.drawImage(SpriteSheetType.grassMid, 4, 5);
      // this._graphics._board.drawImage(SpriteSheetType.grassMid, 5, 5);
      // this._graphics._board.drawImage(SpriteSheetType.grassRight, 6, 5);
      // this._graphics._board.drawImage(SpriteSheetType.liquidWaterTopmid, 7, 5);
      // this._graphics._board.drawImage(SpriteSheetType.liquidWaterTopmid, 8, 5);
      // this._graphics._board.drawImage(SpriteSheetType.liquidWaterTopmid, 9, 5);
      // this._graphics._board.drawImage(SpriteSheetType.grassCliffLeft, 10, 5);
      // this._graphics._board.drawImage(SpriteSheetType.grassMid, 11, 5);
      // this._graphics._board.drawImage(SpriteSheetType.grassMid, 12, 5);
      this._graphics._board.drawImage(SpriteSheetType.grassHillLeft, 13, 5);
      this._graphics._board.drawImage(SpriteSheetType.grassHillLeft2, 14, 5);
      this._graphics._board.drawImage(SpriteSheetType.grassCenter, 15, 5);
      this._graphics._board.drawImage(SpriteSheetType.grassCenter, 16, 5);
      // this._graphics._board.drawImage(SpriteSheetType.grassRight, 17, 5);
      // this._graphics._board.drawImage(SpriteSheetType.liquidWater, 18, 5);
      // this._graphics._board.drawImage(SpriteSheetType.liquidWater, 19, 5);

      //this._graphics._board.drawImage(SpriteSheetType.liquidWater, 0, 6);
      //this._graphics._board.drawImage(SpriteSheetType.grassLeft, 1, 6);
      //this._graphics._board.drawImage(SpriteSheetType.grassLeft, 2, 6);
      // this._graphics._board.drawImage(SpriteSheetType.fence, 3, 6);
      // this._graphics._board.drawImage(SpriteSheetType.grassMid, 4, 6);
      // this._graphics._board.drawImage(SpriteSheetType.grassMid, 5, 6);
      // this._graphics._board.drawImage(SpriteSheetType.grassRight, 6, 6);
      // this._graphics._board.drawImage(SpriteSheetType.liquidWaterTopmid, 7, 6);
      // this._graphics._board.drawImage(SpriteSheetType.liquidWaterTopmid, 8, 6);
      // this._graphics._board.drawImage(SpriteSheetType.liquidWaterTopmid, 9, 6);
      // this._graphics._board.drawImage(SpriteSheetType.grassCliffLeft, 10, 6);
      // this._graphics._board.drawImage(SpriteSheetType.grassMid, 11, 6);
      // this._graphics._board.drawImage(SpriteSheetType.grassMid, 12, 6);
      // this._graphics._board.drawImage(SpriteSheetType.grassHillLeft, 13, 6);
      this._graphics._board.drawImage(SpriteSheetType.grassHillLeft, 14, 6);
      this._graphics._board.drawImage(SpriteSheetType.grassMid, 15, 6);
      this._graphics._board.drawImage(SpriteSheetType.grassMid, 16, 6);
      this._graphics._board.drawImage(SpriteSheetType.grassCliffRight, 17, 6);
      // this._graphics._board.drawImage(SpriteSheetType.liquidWater, 18, 6);
      // this._graphics._board.drawImage(SpriteSheetType.liquidWater, 19, 6);

      //this._graphics._board.drawImage(SpriteSheetType.liquidWater, 0, 7);
      //this._graphics._board.drawImage(SpriteSheetType.grassLeft, 1, 7);
      //this._graphics._board.drawImage(SpriteSheetType.grassLeft, 2, 7);
      // this._graphics._board.drawImage(SpriteSheetType.fence, 3, 7);
      // this._graphics._board.drawImage(SpriteSheetType.grassMid, 4, 7);
      // this._graphics._board.drawImage(SpriteSheetType.grassMid, 5, 7);
      // this._graphics._board.drawImage(SpriteSheetType.grassRight, 6, 7);
      // this._graphics._board.drawImage(SpriteSheetType.liquidWaterTopmid, 7, 7);
      // this._graphics._board.drawImage(SpriteSheetType.liquidWaterTopmid, 8, 7);
      // this._graphics._board.drawImage(SpriteSheetType.liquidWaterTopmid, 9, 7);
      // this._graphics._board.drawImage(SpriteSheetType.grassCliffLeft, 10, 7);
      // this._graphics._board.drawImage(SpriteSheetType.grassMid, 11, 7);
      // this._graphics._board.drawImage(SpriteSheetType.grassMid, 12, 7);
      // this._graphics._board.drawImage(SpriteSheetType.grassHillLeft, 13, 7);
      // this._graphics._board.drawImage(SpriteSheetType.grassHillLeft, 14, 7);
      // this._graphics._board.drawImage(SpriteSheetType.grassMid, 15, 7);
      this._graphics._board.drawImage(SpriteSheetType.doorclosedMid, 16, 7);
      // this._graphics._board.drawImage(SpriteSheetType.grassCliffRight, 17, 7);
      // this._graphics._board.drawImage(SpriteSheetType.liquidWater, 18, 7);
      // this._graphics._board.drawImage(SpriteSheetType.liquidWater, 19, 7);

      //this._graphics._board.drawImage(SpriteSheetType.liquidWater, 0, 8);
      //this._graphics._board.drawImage(SpriteSheetType.grassLeft, 1, 8);
      //this._graphics._board.drawImage(SpriteSheetType.grassLeft, 2, 8);
      // this._graphics._board.drawImage(SpriteSheetType.fence, 3, 8);
      // this._graphics._board.drawImage(SpriteSheetType.grassMid, 4, 8);
      // this._graphics._board.drawImage(SpriteSheetType.grassMid, 5, 8);
      // this._graphics._board.drawImage(SpriteSheetType.grassRight, 6, 8);
      // this._graphics._board.drawImage(SpriteSheetType.liquidWaterTopmid, 7, 8);
      // this._graphics._board.drawImage(SpriteSheetType.liquidWaterTopmid, 8, 8);
      // this._graphics._board.drawImage(SpriteSheetType.liquidWaterTopmid, 9, 8);
      // this._graphics._board.drawImage(SpriteSheetType.grassCliffLeft, 10, 8);
      // this._graphics._board.drawImage(SpriteSheetType.grassMid, 11, 8);
      // this._graphics._board.drawImage(SpriteSheetType.grassMid, 12, 8);
      // this._graphics._board.drawImage(SpriteSheetType.grassHillLeft, 13, 8);
      // this._graphics._board.drawImage(SpriteSheetType.grassHillLeft, 14, 8);
      // this._graphics._board.drawImage(SpriteSheetType.grassMid, 15, 8);
      this._graphics._board.drawImage(SpriteSheetType.doorclosedTop, 16, 8);
      // this._graphics._board.drawImage(SpriteSheetType.grassCliffRight, 17, 8);
      // this._graphics._board.drawImage(SpriteSheetType.liquidWater, 18, 8);
      // this._graphics._board.drawImage(SpriteSheetType.liquidWater, 19, 8);

      requestAnimationFrame(this.gameLoop);
    }
  }

}
