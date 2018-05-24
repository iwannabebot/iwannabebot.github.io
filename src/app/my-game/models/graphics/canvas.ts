export class Canvas {
  public isReady = false;
  public _w: number = -1;
  public _h: number = -1;
  _context: CanvasRenderingContext2D;
  public get Context(): CanvasRenderingContext2D {
    return this._context;
  }
  public set Context(c: CanvasRenderingContext2D) {
    this._context = c;
    this.isReady = true;
  }
  _canvas: HTMLCanvasElement;
  public get Canvas(): HTMLCanvasElement {
    return this._canvas;
  }
  public set Canvas(c: HTMLCanvasElement) {
    this.isReady = false;
    this._canvas = c;
    if (c.height !== c.width / 2) {
      // throw new Error("canvas width:height::2:1 failed")
    }
    this._w = c.width;
    this._h = c.height;
    this.Context = c.getContext("2d");
  }

  constructor(
    canvas1: HTMLCanvasElement) {
    this.Canvas = canvas1;
  }
}
