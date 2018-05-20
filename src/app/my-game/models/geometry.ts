export class Point {
  public x: number;
  public y: number;
}

export class Size {
  public width: number;
  public height: number;
}

export class Rectangle {
  public Location: Point;
  public Size: Size;

  constructor(x:number, y:number, width: number, height: number) {
    this.Size = new Size();
    this.Size.width = width;
    this.Size.height = height;
    this.Location = new Point();
    this.Location.x = x;
    this.Location.y = y;
  }

  get TopLeft(): Point {
    return this.Location;
  }
  get TopRight(): Point {
    let _l = this.Location;
    _l.x = _l.x + this.Size.width;
    return _l;
  }
  get BottomLeft(): Point {
    let _l = this.Location;
    _l.y = _l.y + this.Size.height;
    return _l;
  }
  get BottomRight(): Point {
    let _l = this.Location;
    _l.x = _l.x + this.Size.width;
    _l.y = _l.y + this.Size.height;
    return _l;
  }
}
