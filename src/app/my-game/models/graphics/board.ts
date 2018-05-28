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
    scaleX = (scaleX == undefined) ? 1 : scaleX;
    scaleY = (scaleY == undefined) ? 1 : scaleY;
    var cvs = this._canvases[on] as Canvas;
    if (cvs.Context != null) {
      const s = this._sprites[sprite] as Sprite;
      const img = this._spriteSheets[s.type] as HTMLImageElement;

      // Scale down
      const cx = this.CanvasFactor * (bx);
      let cy = this.CanvasFactor * (by);
      const cw = s.w / this.ImageFactor * this.CanvasFactor * scaleX;
      const ch = s.h / this.ImageFactor * this.CanvasFactor * scaleY;

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
    isDay: boolean
  ) {
    var cvs = this._canvases[CanvasType.World] as Canvas;
    if (cvs.Context != null) {
      // Apply style
      var grd = cvs.Context.createLinearGradient(0, 0, 0, cvs._h);
      if (isDay) {
        grd.addColorStop(0, "#d0f4f7");
        grd.addColorStop(1, "white");
      } else {
        grd.addColorStop(0, "#000000");
        grd.addColorStop(1, "#000000");
      }

      cvs.Context.fillStyle = grd;

      // Apply Scaling
      cvs.Context.fillRect(0, 0, cvs._w, cvs._h);
    }
  }

  forCanvas(on: CanvasType): Canvas {
    return (this._canvases[on] as Canvas);
  }
}
