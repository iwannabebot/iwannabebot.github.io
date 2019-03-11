import { Arc } from './shapes/arc';
import { Triangle } from './shapes/triangle';
import { Line } from './shapes/line';
import { Ellipse } from './shapes/ellipse';
import { Circle } from './shapes/circle';
import { Rectangle } from './shapes/rectangle';
import { Point } from './shapes/point';
import { Poly } from './shapes/poly';

import * as p5 from 'p5';

export class Collide2D {
  _collideDebug = false;

  constructor(public p: p5) {}

  collideDebug = (debugMode: boolean) => {
    this._collideDebug = debugMode;
  }
  collideRectRect = (
    rec1: Rectangle,
    rec2: Rectangle
  ) => {
    const x = rec1.TopLeft.X, y = rec1.TopLeft.Y, w = rec1.Width, h = rec1.Height,
    x2 = rec2.TopLeft.X, y2 = rec2.TopLeft.Y, w2 = rec2.Width, h2 = rec2.Height;
    //2d
    //add in a thing to detect rectMode CENTER
    if (
      x + w >= x2 && // r1 right edge past r2 left
      x <= x2 + w2 && // r1 left edge past r2 right
      y + h >= y2 && // r1 top edge past r2 bottom
      y <= y2 + h2
    ) {
      // r1 bottom edge past r2 top
      return true;
    }
    return false;
  }
  collideRectCircle = (
    rec: Rectangle,
    cir: Circle
  ) => {
    const rx = rec.TopLeft.X, ry = rec.TopLeft.Y, rw = rec.Width, rh = rec.Height;
    const cx = cir.Center.X, cy = cir.Center.Y, diameter = cir.Radius * 2;
    //2d
    // temporary variables to set edges for testing
    var testX = cx;
    var testY = cy;

    // which edge is closest?
    if (cx < rx) {
      testX = rx; // left edge
    } else if (cx > rx + rw) {
      testX = rx + rw;
    } // right edge

    if (cy < ry) {
      testY = ry; // top edge
    } else if (cy > ry + rh) {
      testY = ry + rh;
    } // bottom edge

    // // get distance from closest edges
    var distance = this.p.dist(cx, cy, testX, testY);

    // if the distance is less than the radius, collision!
    if (distance <= diameter / 2) {
      return true;
    }
    return false;
  }
  collideCircleCircle = (
    cir1: Circle,
    cir2: Circle,
  ) => {
    const x = cir1.Center.X, y = cir1.Center.Y, d = cir1.Radius * 2;
    const x2 = cir2.Center.X, y2 = cir2.Center.Y, d2 = cir2.Radius * 2;
    //2d
    if (this.p.dist(x, y, x2, y2) <= d / 2 + d2 / 2) {
      return true;
    }
    return false;
  }
  collidePointCircle = (
    point: Point,
    cir1: Circle,
  ) => {
    const x = point.X, y = point.Y;
    const cx = cir1.Center.X, cy = cir1.Center.Y, d = cir1.Radius * 2;
    //2d
    if (this.p.dist(x, y, cx, cy) <= d / 2) {
      return true;
    }
    return false;
  }
  collidePointEllipse = (
    point: Point,
    ellipse: Ellipse
  ) => {
    //2d
    const x = point.X, y = point.Y;
    const cx = ellipse.XCenter, cy = ellipse.YCenter,
     dx = ellipse.XDiameter, dy = ellipse.YDiameter;
    var rx = dx / 2,
      ry = dy / 2;
    // Discarding the points outside the bounding box
    if (x > cx + rx || x < cx - rx || y > cy + ry || y < cy - ry) {
      return false;
    }
    // Compare the point to its equivalent on the ellipse
    var xx = x - cx,
      yy = y - cy;
    var eyy = (ry * this.p.sqrt(this.p.abs(rx * rx - xx * xx))) / rx;
    return yy <= eyy && yy >= -eyy;
  }
  collidePointRect = (
    point: Point,
    rect: Rectangle
  ) => {
    const pointX = point.X, pointY= point.Y;
    const x = rect.TopLeft.X, y = rect.TopLeft.Y,
    w= rect.Width, h= rect.Height;
    //2d
    if (
      pointX >= x && // right of the left edge AND
      pointX <= x + w && // left of the right edge AND
      pointY >= y && // below the top AND
      pointY <= y + h
    ) {
      // above the bottom
      return true;
    }
    return false;
  }
  collidePointLine = (
    point: Point,
    line: Line,
    buffer: number = undefined
  ) => {
    const px = point.X, py = point.Y;
    const x1 = line.Start.X, y1 =line.Start.Y,
    x2 = line.End.X, y2 = line.End.Y;
    // get distance from the point to the two ends of the line
    var d1 = this.p.dist(px, py, x1, y1);
    var d2 = this.p.dist(px, py, x2, y2);

    // get the length of the line
    var lineLen = this.p.dist(x1, y1, x2, y2);

    // since floats are so minutely accurate, add a little buffer zone that will give collision
    if (buffer === undefined) {
      buffer = 0.1;
    } // higher # = less accurate

    // if the two distances are equal to the line's length, the point is on the line!
    // note we use the buffer here to give a range, rather than one #
    if (d1 + d2 >= lineLen - buffer && d1 + d2 <= lineLen + buffer) {
      return true;
    }
    return false;
  }
  collideLineCircle = (
    line: Line,
    cir1: Circle
  ) => {
    const cx = cir1.Center.X, cy = cir1.Center.Y, d = cir1.Radius * 2;
    const x1 = line.Start.X, y1 =line.Start.Y,
    x2 = line.End.X, y2 = line.End.Y;
    // is either end INSIDE the circle?
    // if so, return true immediately
    var inside1 = this.collidePointCircle({X: x1, Y: y1} as Point, cir1);
    var inside2 = this.collidePointCircle({X: x2, Y: y2} as Point, cir1);
    if (inside1 || inside2) return true;

    // get length of the line
    var distX = x1 - x2;
    var distY = y1 - y2;
    var len = this.p.sqrt(distX * distX + distY * distY);

    // get dot product of the line and circle
    var dot =
      ((cx - x1) * (x2 - x1) + (cy - y1) * (y2 - y1)) / this.p.pow(len, 2);

    // find the closest point on the line
    var closestX = x1 + dot * (x2 - x1);
    var closestY = y1 + dot * (y2 - y1);

    // is this point actually on the line segment?
    // if so keep going, but if not, return false
    var onSegment = this.collidePointLine(
      { X: closestX, Y:closestY} as Point, line);
    if (!onSegment) return false;

    // draw a debug circle at the closest point on the line
    if (this._collideDebug) {
      this.p.ellipse(closestX, closestY, 10, 10);
    }

    // get distance to closest point
    distX = closestX - cx;
    distY = closestY - cy;
    var distance = this.p.sqrt(distX * distX + distY * distY);

    if (distance <= cir1.Radius) {
      return true;
    }
    return false;
  }
  collideLineLine = (
    line1: Line,
    line2: Line,
    calcIntersection: boolean = undefined
  ) => {
    const x1 = line1.Start.X, y1 =line1.Start.Y, x2 = line1.End.X, y2 = line1.End.Y;
    const x3 = line2.Start.X, y3 =line2.Start.Y, x4 = line2.End.X, y4 = line2.End.Y;
    var intersection;

    // calculate the distance to intersection point
    var uA =
      ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) /
      ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1));
    var uB =
      ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) /
      ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1));

    // if uA and uB are between 0-1, lines are colliding
    if (uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1) {
      if (this._collideDebug || calcIntersection) {
        // calc the point where the lines meet
        var intersectionX = x1 + uA * (x2 - x1);
        var intersectionY = y1 + uA * (y2 - y1);
      }

      if (this._collideDebug) {
        this.p.ellipse(intersectionX, intersectionY, 10, 10);
      }

      if (calcIntersection) {
        intersection = {
          x: intersectionX,
          y: intersectionY
        };
        return intersection;
      } else {
        return true;
      }
    }
    if (calcIntersection) {
      intersection = {
        x: false,
        y: false
      };
      return intersection;
    }
    return false;
  }

  collideLineRect = function(
    line1: Line,
    rect: Rectangle,
    calcIntersection: boolean = undefined
  ) {
    const x1 = line1.Start.X, y1 =line1.Start.Y, x2 = line1.End.X, y2 = line1.End.Y;
    const rx = rect.TopLeft.X, ry = rect.TopLeft.Y, rw= rect.Width, rh= rect.Height;
    // check if the line has hit any of the rectangle's sides. uses the collideLineLine function above
    var left, right, top, bottom, intersection;

    if (calcIntersection) {
      left = this.collideLineLine(x1, y1, x2, y2, rx, ry, rx, ry + rh, true);
      right = this.collideLineLine(
        x1,
        y1,
        x2,
        y2,
        rx + rw,
        ry,
        rx + rw,
        ry + rh,
        true
      );
      top = this.collideLineLine(x1, y1, x2, y2, rx, ry, rx + rw, ry, true);
      bottom = this.collideLineLine(
        x1,
        y1,
        x2,
        y2,
        rx,
        ry + rh,
        rx + rw,
        ry + rh,
        true
      );
      intersection = {
        left: left,
        right: right,
        top: top,
        bottom: bottom
      };
    } else {
      //return booleans
      left = this.collideLineLine(x1, y1, x2, y2, rx, ry, rx, ry + rh);
      right = this.collideLineLine(
        x1,
        y1,
        x2,
        y2,
        rx + rw,
        ry,
        rx + rw,
        ry + rh
      );
      top = this.collideLineLine(x1, y1, x2, y2, rx, ry, rx + rw, ry);
      bottom = this.collideLineLine(
        x1,
        y1,
        x2,
        y2,
        rx,
        ry + rh,
        rx + rw,
        ry + rh
      );
    }

    // if ANY of the above are true, the line has hit the rectangle
    if (left || right || top || bottom) {
      if (calcIntersection) {
        return intersection;
      }
      return true;
    }
    return false;
  }
  collidePointPoly = function (
    point: Point,
    poly: Poly) {
    var collision = false;
    const px = point.X, py = point.Y;
    // go through each of the vertices, plus the next vertex in the list
    var next = 0;
    for (var current = 0; current < poly.Vectors.length; current++) {
      // get next vertex in list if we've hit the end, wrap around to 0
      next = current + 1;
      if (next == poly.Vectors.length) next = 0;

      // get the PVectors at our current position this makes our if statement a little cleaner
      var vc = poly.Vectors[current]; // c for "current"
      var vn = poly.Vectors[next]; // n for "next"

      // compare position, flip 'collision' variable back and forth
      if (
        ((vc.y > py && vn.y < py) || (vc.y < py && vn.y > py)) &&
        px < ((vn.x - vc.x) * (py - vc.y)) / (vn.y - vc.y) + vc.x
      ) {
        collision = !collision;
      }
    }
    return collision;
  }
  collideCirclePoly = (
    cir1: Circle,
    poly: Poly,
    interior: boolean
  ) => {
    if (interior == undefined) {
      interior = false;
    }
    const cx = cir1.Center.X, cy = cir1.Center.Y, diameter = cir1.Radius * 2;
    // go through each of the vertices, plus the next vertex in the list
    var next = 0;
    for (var current = 0; current < poly.Vectors.length; current++) {
      // get next vertex in list if we've hit the end, wrap around to 0
      next = current + 1;
      if (next == poly.Vectors.length) next = 0;

      // get the PVectors at our current position this makes our if statement a little cleaner
      var vc = poly.Vectors[current]; // c for "current"
      var vn = poly.Vectors[next]; // n for "next"

      // check for collision between the circle and a line formed between the two vertices
      var collision = this.collideLineCircle(
        {
          Start: {
            X: vc.x,
            Y: vc.y
          },
          End: {
            X: vn.x,
            Y: vn.y
          }
        },
        cir1
      );
      if (collision) return true;
    }

    // test if the center of the circle is inside the polygon
    if (interior == true) {
      var centerInside = this.collidePointPoly({
        X: cx,
        Y: cy
      }, poly);
      if (centerInside) return true;
    }

    // otherwise, after all that, return false
    return false;
  }
  collideRectPoly = (
    rect: Rectangle,
    poly: Poly,
    interior: boolean
  ) => {
    if (interior == undefined) {
      interior = false;
    }
    const rx = rect.TopLeft.X, ry = rect.TopLeft.Y, rw= rect.Width, rh= rect.Height;
    // go through each of the vertices, plus the next vertex in the list
    var next = 0;
    for (var current = 0; current < poly.Vectors.length; current++) {
      // get next vertex in list if we've hit the end, wrap around to 0
      next = current + 1;
      if (next == poly.Vectors.length) next = 0;

      // get the PVectors at our current position this makes our if statement a little cleaner
      var vc = poly.Vectors[current]; // c for "current"
      var vn = poly.Vectors[next]; // n for "next"

      // check against all four sides of the rectangle
      var collision = this.collideLineRect(
        {
          Start: {
            X: vc.x,
            Y: vc.y
          },
          End: {
            X: vn.x,
            Y: vn.y
          }
        },
        rect
      );
      if (collision) return true;

      // optional: test if the rectangle is INSIDE the
      // polygon note that this iterates all sides of
      // the polygon again, so only use this if you need to
      if (interior == true) {
        var inside = this.collidePointPoly({
          X: rx,
          Y: ry
        }, poly);
        if (inside) return true;
      }
    }

    return false;
  }
  collideLinePoly = (
    x1: number, y1: number, x2: number, y2: number,
    poly: Poly,
  ) => {
    // go through each of the vertices, plus the next vertex in the list
    var next = 0;
    for (var current = 0; current < poly.Vectors.length; current++) {
      // get next vertex in list if we've hit the end, wrap around to 0
      next = current + 1;
      if (next == poly.Vectors.length) next = 0;

      // get the PVectors at our current position extract X/Y coordinates from each
      var x3 = poly.Vectors[current].x;
      var y3 = poly.Vectors[current].y;
      var x4 = poly.Vectors[next].x;
      var y4 = poly.Vectors[next].y;
      // do a Line/Line comparison if true, return 'true' immediately and stop testing (faster)
      var hit = this.collideLineLine({
        Start: {
          X: x1,
          Y: y1
        },
        End: {
          X: x2,
          Y: y2
        }
      },{
        Start: {
          X: x3,
          Y: y3
        },
        End: {
          X: x4,
          Y: y4
        }
      });
      if (hit) {
        return true;
      }
    }
    // never got a hit
    return false;
  }
  collidePolyPoly = (
    p1: Poly, p2: Poly, interior: boolean) => {
    if (interior == undefined) {
      interior = false;
    }
    // go through each of the vertices, plus the next vertex in the list
    var next = 0;
    for (var current = 0; current < p1.Vectors.length; current++) {
      // get next vertex in list, if we've hit the end, wrap around to 0
      next = current + 1;
      if (next == p1.Vectors.length) next = 0;

      // get the PVectors at our current position this makes our if statement a little cleaner
      var vc = p1[current]; // c for "current"
      var vn = p1[next]; // n for "next"

      //use these two points (a line) to compare to the other polygon's vertices using polyLine()
      var collision = this.collideLinePoly(vc.x, vc.y, vn.x, vn.y, p2);
      if (collision) return true;

      //check if the 2nd polygon is INSIDE the first
      if (interior == true) {
        collision = this.collidePointPoly({
          X: p2.Vectors[0].x,
          Y: p2.Vectors[0].y
        }, p1);
        if (collision) return true;
      }
    }

    return false;
  }
  collidePointTriangle = (
    point: Point,
    tri: Triangle) => {
      const px = point.X, py = point.Y;
      const x1 = tri.Point1.X, y1 = tri.Point1.Y, x2 = tri.Point2.X, y2 = tri.Point2.Y, x3 = tri.Point3.X, y3 = tri.Point3.Y;
    // get the area of the triangle
    var areaOrig = this.p.abs((x2 - x1) * (y3 - y1) - (x3 - x1) * (y2 - y1));

    // get the area of 3 triangles made between the point and the corners of the triangle
    var area1 = this.p.abs((x1 - px) * (y2 - py) - (x2 - px) * (y1 - py));
    var area2 = this.p.abs((x2 - px) * (y3 - py) - (x3 - px) * (y2 - py));
    var area3 = this.p.abs((x3 - px) * (y1 - py) - (x1 - px) * (y3 - py));

    // if the sum of the three areas equals the original, we're inside the triangle!
    if (area1 + area2 + area3 == areaOrig) {
      return true;
    }
    return false;
  }
  collidePointPoint = (
    point: Point,
    point2: Point,
    buffer: number) => {
        const x = point.X, y = point.Y;
        const x2 = point2.X, y2 = point2.Y;
    if (buffer == undefined) {
      buffer = 0;
    }

    if (this.p.dist(x, y, x2, y2) <= buffer) {
      return true;
    }

    return false;
  }
  collidePointArc = (
    p: Point,
    arc: Arc,
    buffer: any
  ) => {
    if (buffer == undefined) {
      buffer = 0;
    }
    const px = p.X, py = p.Y;
    // point
    var point = this.p.createVector(px, py);
    const ax = arc.Center.X, ay = arc.Center.Y,
    arcRadius = arc.Radius, arcHeading = arc.Heading, arcAngle= arc.Angle;
    // arc center point
    var arcPos = this.p.createVector(ax, ay);
    // arc radius vector
    var radius = this.p.createVector(arcRadius, 0).rotate(arcHeading);

    var pointToArc = point.copy().sub(arcPos);

    if (point.dist(arcPos) <= arcRadius + buffer) {
      var dot = radius.dot(pointToArc);
      var angle = radius.angleBetween(pointToArc);
      if (dot > 0 && angle <= arcAngle / 2 && angle >= -arcAngle / 2) {
        return true;
      }
    }
    return false;
  }
}
