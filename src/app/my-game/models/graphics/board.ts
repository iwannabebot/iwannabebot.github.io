import { SpriteItem, SpriteSheet, Sprite, SpriteSheetType } from "./sprite";

export class Board {

  sprites: SpriteItem[] = [];

  spriteSheet: SpriteSheet[] = [];

  canvases: CanvasCollection[] = [];

  public get isReady(): boolean {
    let f = true;
    this.canvases.forEach((c: any) => {
      if (!c.isReady) {
        f = false;
      }
    });
    return f;
  }

  _canvasFactor: number = 1;
  public get CanvasFactor(): number {
    return this._canvasFactor;
  }
  public set CanvasFactor(c: number) {
    this._canvasFactor = c;
  }

  _imageFactor: number = 1;
  public get ImageFactor(): number {
    return this._imageFactor;
  }
  public set ImageFactor(i: number) {
    this._imageFactor = i;
  }



  constructor(
    canvas1: HTMLCanvasElement,
    canvas2: HTMLCanvasElement,
    canvas3: HTMLCanvasElement,
    canvas4: HTMLCanvasElement,
    canvas5: HTMLCanvasElement, canvasFactor: number, imageFactor: number) {
    this.canvases[CanvasType.Background] = new MyCanvas(canvas1);
    this.canvases[CanvasType.WorldShadow] = new MyCanvas(canvas2);
    this.canvases[CanvasType.World] = new MyCanvas(canvas3);
    this.canvases[CanvasType.ItemShadow] = new MyCanvas(canvas4);
    this.canvases[CanvasType.Item] = new MyCanvas(canvas5);
    this.CanvasFactor = canvasFactor;
    this.ImageFactor = imageFactor;
  }

  drawImage(
    on: CanvasType,
    sprite:
      SpriteSheetType,
    bx: number, by: number
  ) {
    if (this.canvases[on].Context != null) {
      const s = this.spriteSheet[sprite] as Sprite;
      const img = this.sprites[s.type] as HTMLImageElement;
      const cx = this.CanvasFactor * (bx);
      const cy = this.canvases[on]._h - this.CanvasFactor * (by);
      const cw = s.w / this.ImageFactor * this.CanvasFactor;
      const ch = s.h / this.ImageFactor * this.CanvasFactor;

      this.canvases[on].Context.drawImage(
        img,
        s.x, s.y, s.w, s.h,
        cx, cy, cw, ch,
      )
    }
  }

  fillRect(on: CanvasType, bx: number, by: number, bw: number, bh: number, fillStyle: string) {
    const canvas = this.forCanvas(on);
    if (this.canvases[on].Context != null) {

      const cx = this.CanvasFactor * (bx);
      const cy = canvas._h - this.CanvasFactor * (by);
      const cw = bw * this.CanvasFactor;
      const ch = bw * this.CanvasFactor;
      canvas.Context.fillStyle = fillStyle;
      canvas.Context.fillRect(cx, cy, cw, ch);
    }
  }

  forCanvas(on: CanvasType): MyCanvas {
    return (this.canvases[on] as MyCanvas);
  }
}

export interface CanvasCollection {
  [type: string]: MyCanvas;
}

export class MyCanvas {
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

export enum CanvasType {
  Background = 'b',
  World = 'ws',
  Item = 'i',
  ItemShadow = 'is',
  WorldShadow = 'ws'
}
