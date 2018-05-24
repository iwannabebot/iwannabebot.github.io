import { Sprite } from "./sprite";
import { Canvas } from "./canvas";
import { CanvasType } from "./canvas-type";
import { CanvasCollection } from "./canvas-collection";
import { SpriteCollection } from "./sprite-collection";
import { SpriteType } from "./sprite-type";
import { SpriteSheetColection } from "./sprite-sheet-collection";

export class Board {

  _spriteSheets: SpriteSheetColection[] = [];

  _sprites: SpriteCollection[] = [];

  _canvases: CanvasCollection[] = [];

  public get isReady(): boolean {
    let f = true;
    this._canvases.forEach((c: any) => {
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
    this._canvases[CanvasType.Background] = new Canvas(canvas1);
    this._canvases[CanvasType.WorldShadow] = new Canvas(canvas2);
    this._canvases[CanvasType.World] = new Canvas(canvas3);
    this._canvases[CanvasType.ItemShadow] = new Canvas(canvas4);
    this._canvases[CanvasType.Item] = new Canvas(canvas5);
    this.CanvasFactor = canvasFactor;
    this.ImageFactor = imageFactor;
  }

  drawImage(
    on: CanvasType,
    sprite:
      SpriteType,
    bx: number, by: number,
    scaleX?: number, scaleY?: number
  ) {
    var cvs = this._canvases[on] as Canvas;
    if (cvs.Context != null) {
      const s = this._sprites[sprite] as Sprite;
      const img = this._spriteSheets[s.type] as HTMLImageElement;

      // Scale down
      const cx = this.CanvasFactor * (bx);
      let cy = this.CanvasFactor * (by);
      const cw = s.w / this.ImageFactor * this.CanvasFactor;
      const ch = s.h / this.ImageFactor * this.CanvasFactor;

      // Invert axis from topleft to bottomleft;
      cy = cvs._h - cy;

      this._canvases[on].Context.drawImage(
        img,
        s.x, s.y, s.w, s.h,
        cx, cy, cw, ch,
      )
    }
  }

  coverRectangle(
    on: CanvasType,
    sprite: SpriteType,
    bx: number, by: number,
    scaleX?: number, scaleY?: number
  ) {
    var cvs = this._canvases[on] as Canvas;
    if (cvs.Context != null) {
      const s = this._sprites[sprite] as Sprite;
      // Scale down to canvas
      const cx = this.CanvasFactor * (bx);
      let cy = this.CanvasFactor * (by);
      const cw = s.w / this.ImageFactor * this.CanvasFactor;
      const ch = s.h / this.ImageFactor * this.CanvasFactor;

      // Invert axis from topleft to bottomleft;
      cy = cvs._h - cy;

      // Apply style
      var grd = cvs.Context.createLinearGradient(0, 0, 0, cvs._h);
      grd.addColorStop(0, "#d0f4f7");
      grd.addColorStop(1, "white");
      cvs.Context.fillStyle = grd;

      // Paint
      cvs.Context.fillRect(cx, cy, cw, ch);

      // Apply Scaling
      cvs.Context.fillRect(0, 0, cvs._w, cvs._h);
    }
  }

  forCanvas(on: CanvasType): Canvas {
    return (this._canvases[on] as Canvas);
  }
}
