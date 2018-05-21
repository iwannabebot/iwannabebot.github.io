import { Injectable } from '@angular/core';
import { Board } from '../../models/graphics/board';
import { MyGameStoryService } from '../my-game-story/my-game-story.service';

@Injectable()
export class MyGameEngineService {

  public _board: Board = null;
  public _story: MyGameStoryService = null;

  constructor() { }

  public init(canvas: HTMLCanvasElement, story: MyGameStoryService) {
    this._board = new Board(canvas);
    this._board._gameLoop = this.gameLoop;
    this._board._gameLoop();
  }

  public gameLoop() {
    requestAnimationFrame(this.gameLoop);
  }

}
