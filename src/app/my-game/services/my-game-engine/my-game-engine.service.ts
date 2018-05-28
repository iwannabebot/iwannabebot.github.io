import { Injectable } from '@angular/core';
import { MyGameStoryService } from '../my-game-story/my-game-story.service';
import { MyGameGraphicsService } from '../my-game-graphics/my-game-graphics.service';
import { SpriteType } from '../../models/graphics/sprite-type';

@Injectable()
export class MyGameEngineService {

  private _story: MyGameStoryService = null;
  private _graphics: MyGameGraphicsService;
  _baseTime: any;
  public step(): number {

    let cTime = (window.performance &&
      window.performance.now &&
      window.performance.timing &&
      window.performance.timing.navigationStart ?
      window.performance.now() + window.performance.timing.navigationStart :
      Date.now()) - this._baseTime;

    if (Number.MAX_VALUE - cTime < 1000) {
      this._baseTime = window.performance &&
        window.performance.now &&
        window.performance.timing &&
        window.performance.timing.navigationStart ?
        window.performance.now() + window.performance.timing.navigationStart :
        Date.now();
      return this.step();
    } else {
      return cTime;
    }
  }

  constructor() { }

  public init(story: MyGameStoryService, graphics: MyGameGraphicsService) {
    this._story = story;
    this._graphics = graphics;
    this._baseTime = window.performance && window.performance.now && window.performance.timing && window.performance.timing.navigationStart ? window.performance.now() + window.performance.timing.navigationStart : Date.now();
    this.gameLoop();
  }

  public gameLoop() {
    if (this.getSetGo()) {
      this.drawBrackground();
      this.drawWorld();
      this.drawObjects();
      requestAnimationFrame(this.gameLoop.bind(this));
    }
  }

  getSetGo(): boolean {
    return this != null &&
      this._graphics != null &&
      this._graphics._board != null &&
      this._graphics._board.isReady;
  }

  hoveri = -1;
  hoverdx = 0.05;
  hoverx = 0;

  hoverInc() {
    if (this.hoverx > 2) {
      this.hoveri = -1;
    } else if (this.hoverx < -2) {
      this.hoveri = +1;
    }
  }

  drawBrackground(): any {
    this.hoverInc()
    this._graphics.drawCover(true);
    this._graphics.drawWorld(SpriteType.sun, 4, 9);
    this.hoverx = this.hoverx + (this.hoveri * this.hoverdx) / 10;
    this._graphics.drawWorld(SpriteType.cloud1, 3 + this.hoverx, 10);
    this._graphics.drawWorld(SpriteType.cloud1, 7 + this.hoverx, 7);
    this._graphics.drawWorld(SpriteType.cloud1, 4 + this.hoverx, 9);

    this._graphics.drawWorld(SpriteType.cloud1, 11 + this.hoverx, 12);
    this._graphics.drawWorld(SpriteType.cloud1, 9 + this.hoverx, 12);
    this._graphics.drawWorld(SpriteType.cloud1, 5 + this.hoverx, 12);
  }

  snailWalk = 0;

  drawObjects(): any {
    this.snailWalk = this.snailWalk + 1;

    if (this.snailWalk === 20) {
      this.snailWalk = 0;
    }
    if (this.hoveri == -1) {
      if (this.snailWalk < 10) {
        this._graphics.drawWorld(SpriteType.snailWalk1, 4 + this.hoverx, 2.4);
        this._graphics.drawWorld(SpriteType.snailWalk1, 11 + this.hoverx/2, 4.4);
      } else {
        this._graphics.drawWorld(SpriteType.snailWalk2, 4 + this.hoverx, 2.4);
        this._graphics.drawWorld(SpriteType.snailWalk2, 11 + this.hoverx/2, 4.4);
      }
    } else {
      if (this.snailWalk < 10) {
        this._graphics.drawWorld(SpriteType.snailWalk1i, 4 + this.hoverx, 2.4);
        this._graphics.drawWorld(SpriteType.snailWalk1i, 11 + this.hoverx/2, 4.4)
      } else {
        this._graphics.drawWorld(SpriteType.snailWalk2i, 4 + this.hoverx, 2.4);
        this._graphics.drawWorld(SpriteType.snailWalk2i, 11 + this.hoverx/2, 4.4);
      }
    }


    this._graphics.drawWorld(SpriteType.coinGold, 7, 4.6)
    this._graphics.drawWorld(SpriteType.coinGold, 8, 5.25)
    this._graphics.drawWorld(SpriteType.coinGold, 9.2, 5.2)
  }
  drawWorld(): any {
    this._graphics.drawWorld(SpriteType.liquidWaterTopmid, 0, 1)
    this._graphics.drawWorld(SpriteType.grassLeftCorner, 1, 1)
    this._graphics.drawWorld(SpriteType.grassMid, 2, 1)
    this._graphics.drawWorld(SpriteType.grassMid, 3, 1)
    this._graphics.drawWorld(SpriteType.grassCenter, 4, 1)
    this._graphics.drawWorld(SpriteType.grassRightCorner, 4, 1)
    this._graphics.drawWorld(SpriteType.grassCenter, 5, 1)
    this._graphics.drawWorld(SpriteType.grassCenter, 6, 1)
    this._graphics.drawWorld(SpriteType.liquidWaterTopmid, 5, 1)
    this._graphics.drawWorld(SpriteType.liquidWaterTopmid, 6, 1)
    this._graphics.drawWorld(SpriteType.liquidWaterTopmid, 7, 1)
    this._graphics.drawWorld(SpriteType.liquidWaterTopmid, 8, 1)
    this._graphics.drawWorld(SpriteType.liquidWaterTopmid, 9, 1)
    this._graphics.drawWorld(SpriteType.liquidWaterTopmid, 10, 1)
    this._graphics.drawWorld(SpriteType.grassCenter, 11, 1)
    this._graphics.drawWorld(SpriteType.grassCenter, 12, 1)
    this._graphics.drawWorld(SpriteType.grassCenter, 13, 1)
    this._graphics.drawWorld(SpriteType.grassCenter, 14, 1)
    this._graphics.drawWorld(SpriteType.liquidWaterTopmid, 11, 1)
    this._graphics.drawWorld(SpriteType.liquidWaterTopmid, 12, 1)
    this._graphics.drawWorld(SpriteType.liquidWaterTopmid, 13, 1)
    this._graphics.drawWorld(SpriteType.liquidWaterTopmid, 14, 1)
    this._graphics.drawWorld(SpriteType.grassCenter, 15, 1)
    this._graphics.drawWorld(SpriteType.grassCenter, 16, 1)
    this._graphics.drawWorld(SpriteType.grassCenter, 17, 1)
    this._graphics.drawWorld(SpriteType.liquidWaterTopmid, 18, 1)
    this._graphics.drawWorld(SpriteType.liquidWaterTopmid, 19, 1)
    this._graphics.drawWorld(SpriteType.liquidWaterTopmid, 20, 1)
    this._graphics.drawWorld(SpriteType.liquidWaterTopmid, 21, 1)
    this._graphics.drawWorld(SpriteType.liquidWaterTopmid, 22, 1)
    this._graphics.drawWorld(SpriteType.liquidWaterTopmid, 23, 1)
    this._graphics.drawWorld(SpriteType.liquidWaterTopmid, 24, 1)
    this._graphics.drawWorld(SpriteType.liquidWaterTopmid, 25, 1)
    this._graphics.drawWorld(SpriteType.liquidWaterTopmid, 26, 1)
    this._graphics.drawWorld(SpriteType.liquidWaterTopmid, 27, 1)

    // this._graphics.drawWorld(SpriteType.liquidWater, 0, 2)
    // this._graphics.drawWorld(SpriteType.p1duck, 1, 2)
    this._graphics.drawWorld(SpriteType.grassLeftCorner, 2, 2)
    this._graphics.drawWorld(SpriteType.grassMid, 3, 2)
    this._graphics.drawWorld(SpriteType.grassMid, 4, 2)
    this._graphics.drawWorld(SpriteType.grassMid, 5, 2)
    this._graphics.drawWorld(SpriteType.grassRightCorner, 6, 2)
    // this._graphics.drawWorld(SpriteType.liquidWaterTopmid, 7, 2)
    // this._graphics.drawWorld(SpriteType.liquidWaterTopmid, 8, 2)
    // this._graphics.drawWorld(SpriteType.liquidWaterTopmid, 9, 2)
    // this._graphics.drawWorld(SpriteType.liquidWaterTopmid, 10, 2)
    this._graphics.drawWorld(SpriteType.grassCenter, 11, 2)
    this._graphics.drawWorld(SpriteType.grassCenter, 12, 2)
    this._graphics.drawWorld(SpriteType.grassCenter, 13, 2)
    this._graphics.drawWorld(SpriteType.grassCenter, 14, 2)
    this._graphics.drawWorld(SpriteType.grassCenter, 15, 2)
    this._graphics.drawWorld(SpriteType.grassCenter, 16, 2)
    this._graphics.drawWorld(SpriteType.grassCenter, 17, 2)
    // this._graphics.drawWorld(SpriteType.liquidWater, 18, 2)
    // this._graphics.drawWorld(SpriteType.liquidWater, 19, 2)


    // this._graphics.drawWorld(SpriteType.liquidWater, 0, 3)
    // this._graphics.drawWorld(SpriteType.grassLeft, 1, 3)
    this._graphics.drawWorld(SpriteType.signRight, 2, 3)
    // if ( this.i % 50 == 0) {
    //   this._graphics.drawWorld(SpriteType.p2duck, 3, 3)
    // } else {
    //   this._graphics.drawWorld(SpriteType.p2hurt, 3, 3.3)
    // }
    this._graphics.drawWorld(SpriteType.fence, 4, 3)
    this._graphics.drawWorld(SpriteType.fence, 5, 3)
    this._graphics.drawWorld(SpriteType.cactus, 5, 3);
    // this._graphics.drawWorld(SpriteType.grassRight, 6, 3)
    // this._graphics.drawWorld(SpriteType.liquidWaterTopmid, 7, 3)
    // this._graphics.drawWorld(SpriteType.liquidWaterTopmid, 8, 3)
    // this._graphics.drawWorld(SpriteType.liquidWaterTopmid, 9, 3)
    // this._graphics.drawWorld(SpriteType.liquidWaterTopmid, 10, 3)
    this._graphics.drawWorld(SpriteType.grassCenter, 11, 3)
    this._graphics.drawWorld(SpriteType.grassCenter, 12, 3)
    this._graphics.drawWorld(SpriteType.grassCenter, 13, 3)
    this._graphics.drawWorld(SpriteType.grassCenter, 14, 3)
    this._graphics.drawWorld(SpriteType.grassCenter, 15, 3)
    this._graphics.drawWorld(SpriteType.grassLeft, 15, 3)
    this._graphics.drawWorld(SpriteType.grassMid, 16, 3)
    this._graphics.drawWorld(SpriteType.grassRightCorner, 17, 3)
    // this._graphics.drawWorld(SpriteType.liquidWater, 18, 3)
    // this._graphics.drawWorld(SpriteType.liquidWater, 19, 3)

    // this._graphics.drawWorld(SpriteType.liquidWater, 0, 4)
    // this._graphics.drawWorld(SpriteType.grassLeft, 1, 4)
    // this._graphics.drawWorld(SpriteType.grassLeft, 2, 4)
    // this._graphics.drawWorld(SpriteType.fence, 3, 4)
    // this._graphics.drawWorld(SpriteType.grassMid, 4, 4)
    // this._graphics.drawWorld(SpriteType.grassMid, 5, 4)
    // this._graphics.drawWorld(SpriteType.grassRight, 6, 4)
    // this._graphics.drawWorld(SpriteType.liquidWaterTopmid, 7, 4)
    // this._graphics.drawWorld(SpriteType.liquidWaterTopmid, 8, 4)
    // this._graphics.drawWorld(SpriteType.liquidWaterTopmid, 9, 4)
    this._graphics.drawWorld(SpriteType.grassCliffLeft, 10, 4)
    this._graphics.drawWorld(SpriteType.grassMid, 11, 4)
    this._graphics.drawWorld(SpriteType.grassMid, 12, 4)
    this._graphics.drawWorld(SpriteType.grassHillLeft2, 13, 4)
    this._graphics.drawWorld(SpriteType.grassCenter, 14, 4)
    this._graphics.drawWorld(SpriteType.grassCenter, 15, 4)
    this._graphics.drawWorld(SpriteType.grassCenter, 16, 4)
    // this._graphics.drawWorld(SpriteType.grassRight, 17, 4)
    // this._graphics.drawWorld(SpriteType.liquidWater, 18, 4)
    // this._graphics.drawWorld(SpriteType.liquidWater, 19, 4)

    // this._graphics.drawWorld(SpriteType.liquidWater, 0, 5)
    // this._graphics.drawWorld(SpriteType.grassLeft, 1, 5)
    // this._graphics.drawWorld(SpriteType.grassLeft, 2, 5)
    // this._graphics.drawWorld(SpriteType.fence, 3, 5)
    // this._graphics.drawWorld(SpriteType.grassMid, 4, 5)
    // this._graphics.drawWorld(SpriteType.grassMid, 5, 5)
    // this._graphics.drawWorld(SpriteType.grassRight, 6, 5)
    // this._graphics.drawWorld(SpriteType.liquidWaterTopmid, 7, 5)
    // this._graphics.drawWorld(SpriteType.liquidWaterTopmid, 8, 5)
    // this._graphics.drawWorld(SpriteType.liquidWaterTopmid, 9, 5)
    // this._graphics.drawWorld(SpriteType.grassCliffLeft, 10, 5)
    // this._graphics.drawWorld(SpriteType.grassMid, 11, 5)
    // this._graphics.drawWorld(SpriteType.grassMid, 12, 5)
    this._graphics.drawWorld(SpriteType.grassHillLeft, 13, 5)
    this._graphics.drawWorld(SpriteType.grassHillLeft2, 14, 5)
    this._graphics.drawWorld(SpriteType.grassCenter, 15, 5)
    this._graphics.drawWorld(SpriteType.grassCenter, 16, 5)
    // this._graphics.drawWorld(SpriteType.grassRight, 17, 5)
    // this._graphics.drawWorld(SpriteType.liquidWater, 18, 5)
    // this._graphics.drawWorld(SpriteType.liquidWater, 19, 5)

    // this._graphics.drawWorld(SpriteType.liquidWater, 0, 6)
    // this._graphics.drawWorld(SpriteType.grassLeft, 1, 6)
    // this._graphics.drawWorld(SpriteType.grassLeft, 2, 6)
    // this._graphics.drawWorld(SpriteType.fence, 3, 6)
    // this._graphics.drawWorld(SpriteType.grassMid, 4, 6)
    // this._graphics.drawWorld(SpriteType.grassMid, 5, 6)
    // this._graphics.drawWorld(SpriteType.grassRight, 6, 6)
    // this._graphics.drawWorld(SpriteType.liquidWaterTopmid, 7, 6)
    // this._graphics.drawWorld(SpriteType.liquidWaterTopmid, 8, 6)
    // this._graphics.drawWorld(SpriteType.liquidWaterTopmid, 9, 6)
    // this._graphics.drawWorld(SpriteType.grassCliffLeft, 10, 6)
    // this._graphics.drawWorld(SpriteType.grassMid, 11, 6)
    // this._graphics.drawWorld(SpriteType.grassMid, 12, 6)
    // this._graphics.drawWorld(SpriteType.grassHillLeft, 13, 6)
    this._graphics.drawWorld(SpriteType.grassHillLeft, 14, 6)
    this._graphics.drawWorld(SpriteType.grassMid, 15, 6)
    this._graphics.drawWorld(SpriteType.grassMid, 16, 6)
    this._graphics.drawWorld(SpriteType.grassCliffRight, 17, 6)
    // this._graphics.drawWorld(SpriteType.liquidWater, 18, 6)
    // this._graphics.drawWorld(SpriteType.liquidWater, 19, 6)

    // this._graphics.drawWorld(SpriteType.liquidWater, 0, 7)
    // this._graphics.drawWorld(SpriteType.grassLeft, 1, 7)
    // this._graphics.drawWorld(SpriteType.grassLeft, 2, 7)
    // this._graphics.drawWorld(SpriteType.fence, 3, 7)
    // this._graphics.drawWorld(SpriteType.grassMid, 4, 7)
    // this._graphics.drawWorld(SpriteType.grassMid, 5, 7)
    // this._graphics.drawWorld(SpriteType.grassRight, 6, 7)
    // this._graphics.drawWorld(SpriteType.liquidWaterTopmid, 7, 7)
    // this._graphics.drawWorld(SpriteType.liquidWaterTopmid, 8, 7)
    // this._graphics.drawWorld(SpriteType.liquidWaterTopmid, 9, 7)
    // this._graphics.drawWorld(SpriteType.grassCliffLeft, 10, 7)
    // this._graphics.drawWorld(SpriteType.grassMid, 11, 7)
    // this._graphics.drawWorld(SpriteType.grassMid, 12, 7)
    // this._graphics.drawWorld(SpriteType.grassHillLeft, 13, 7)
    // this._graphics.drawWorld(SpriteType.grassHillLeft, 14, 7)
    // this._graphics.drawWorld(SpriteType.signExit, 15, 7)
    this._graphics.drawWorld(SpriteType.doorclosedMid, 16, 7)
    this._graphics.drawWorld(SpriteType.signExit, 17, 7)
    // this._graphics.drawWorld(SpriteType.liquidWater, 18, 7)
    // this._graphics.drawWorld(SpriteType.liquidWater, 19, 7)

    // this._graphics.drawWorld(SpriteType.liquidWater, 0, 8)
    // this._graphics.drawWorld(SpriteType.grassLeft, 1, 8)
    // this._graphics.drawWorld(SpriteType.grassLeft, 2, 8)
    // this._graphics.drawWorld(SpriteType.fence, 3, 8)
    // this._graphics.drawWorld(SpriteType.grassMid, 4, 8)
    // this._graphics.drawWorld(SpriteType.grassMid, 5, 8)
    // this._graphics.drawWorld(SpriteType.grassRight, 6, 8)
    // this._graphics.drawWorld(SpriteType.liquidWaterTopmid, 7, 8)
    // this._graphics.drawWorld(SpriteType.liquidWaterTopmid, 8, 8)
    // this._graphics.drawWorld(SpriteType.liquidWaterTopmid, 9, 8)
    // this._graphics.drawWorld(SpriteType.grassCliffLeft, 10, 8)
    // this._graphics.drawWorld(SpriteType.grassMid, 11, 8)
    // this._graphics.drawWorld(SpriteType.grassMid, 12, 8)
    // this._graphics.drawWorld(SpriteType.grassHillLeft, 13, 8)
    // this._graphics.drawWorld(SpriteType.grassHillLeft, 14, 8)
    // this._graphics.drawWorld(SpriteType.grassMid, 15, 8)
    this._graphics.drawWorld(SpriteType.doorclosedTop, 16, 8)
    // this._graphics.drawWorld(SpriteType.grassCliffRight, 17, 8)
    // this._graphics.drawWorld(SpriteType.liquidWater, 18, 8)
    // this._graphics.drawWorld(SpriteType.liquidWater, 19, 8)
  }

}
