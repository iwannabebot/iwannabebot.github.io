import { Rectangle } from "./geometry";

export class DrawItem {

  public Box: Rectangle;
  public Image: HTMLImageElement;
  public ImageLoaded = false;
  public Context: CanvasRenderingContext2D;

  constructor(x:number, y:number, width: number, height:number) {
    this.Box = new Rectangle(x, y, width, height)
  }

  public update(x: number, y: number, image: string) {
    this.Box.Location.x += x;
    this.Box.Location.y += y;
    this.Image = new HTMLImageElement();
    var _this = this;
    this.Image.onload = function() {
      _this.ImageLoaded = true;
      _this.Context.drawImage(_this.Image, x, y)
    };
    this.Image.src = image;
  }

}
