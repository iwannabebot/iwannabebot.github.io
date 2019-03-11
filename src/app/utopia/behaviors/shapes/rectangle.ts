import { Point } from "./point";

export class Rectangle {
  public TopLeft: Point;
  public Width: number;
  public Height: number;
  // public get Right(): number{
  //   return this.TopLeft.X + this.Width;
  // }
  // public get Bottom(): number{
  //   return this.TopLeft.Y + this.Height;
  // }
}
