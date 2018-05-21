export class Board {

  _gameLoop: () => void;
  public set gameLoop(g : () => void) {
    this._gameLoop = g;
  }

  _canvas: HTMLCanvasElement;
  public get Canvas() : HTMLCanvasElement {
    return this._canvas;
  }
  public set Canvas(c : HTMLCanvasElement) {
    this._canvas = c;
    if (c.height !== c.width/2) {
      throw new Error("canvas width:height::2:1 failed")
    }
    this.Context = c.getContext("2d");
  }

  _context: CanvasRenderingContext2D;
  public get Context() : CanvasRenderingContext2D {
    return this._context;
  }
  public set Context(c : CanvasRenderingContext2D) {
    this._context = c;
    this.gameLoop.call(this);
  }

  constructor(canvas: HTMLCanvasElement) {
    this.Canvas = canvas;
  }


}
