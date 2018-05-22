import { SpriteItem, SpriteSheet, Sprite, SpriteSheetType } from "./sprite";

export class Board {

  sprites: SpriteItem[] = [];

  spriteSheet: SpriteSheet[] = [];

  _w: number = -1;
  _h: number = -1;

  _canvas: HTMLCanvasElement;
  public get Canvas() : HTMLCanvasElement {
    return this._canvas;
  }
  public set Canvas(c : HTMLCanvasElement) {
    this._canvas = c;
    if (c.height !== c.width/2) {
      throw new Error("canvas width:height::2:1 failed")
    }
    this._w = c.width;
    this._h = c.height;
    this.Context = c.getContext("2d");
  }

  _context: CanvasRenderingContext2D;
  public get Context() : CanvasRenderingContext2D {
    return this._context;
  }
  public set Context(c : CanvasRenderingContext2D) {
    this._context = c;
  }

  _canvasFactor: number = 1;
  public get CanvasFactor() : number {
    return this._canvasFactor;
  }
  public set CanvasFactor(c : number) {
    this._canvasFactor = c;
  }

  _imageFactor: number = 1;
  public get ImageFactor() : number {
    return this._imageFactor;
  }
  public set ImageFactor(i : number) {
    this._imageFactor = i;
  }



  constructor(canvas: HTMLCanvasElement, canvasFactor: number, imageFactor: number) {
    this.Canvas = canvas;
    this.CanvasFactor = canvasFactor;
    this.ImageFactor = imageFactor;
  }

  drawImage(sprite: SpriteSheetType, bx: number, by: number) {
    if (this.Context != null) {

      const s = this.spriteSheet[sprite] as Sprite;
      const img = this.sprites[s.type];
      const cx = this.CanvasFactor * (bx);
      const cy = this._h - this.CanvasFactor * (by);
      const cw = s.w / this.ImageFactor * this.CanvasFactor;
      const ch = s.h / this.ImageFactor * this.CanvasFactor;

      this.Context.drawImage(
        img,
        s.x, s.y, s.w, s.h,
        cx, cy, cw, ch,
      )
    }
  }

  fillRect (bx: number, by: number, bw: number, bh: number ) {
    if (this.Context != null) {
      const cx = this.CanvasFactor * (bx);
      const cy = this._h - this.CanvasFactor * (by);
      const cw = bw * this.CanvasFactor;
      const ch = bw * this.CanvasFactor;
      this.Context.fillStyle = "black";
      this.Context.fillRect(cx, cy, cw, ch);
    }
  }




}
