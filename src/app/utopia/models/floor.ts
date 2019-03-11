import * as p5 from "p5";
import { Point } from './../behaviors/shapes/point';
import { UtopiaSprite } from "../sprites/sprite";
import { UtopiaSpriteData, UtopiaSpriteDetail } from "./../sprites/sprite";

export class UtopiaFloor {
  private offset = 0;
  private speed = 3;

  private locations: {
    location: Point;
    sprite: UtopiaSpriteDetail;
  }[] = [];

  constructor(private p: p5) {
    this.locations.push({
      location: {
        X: 10,
        Y: this.p.windowHeight - 70
      },
      sprite: UtopiaSpriteData.grassLeftCorner
    });
  }

  public Draw() {
    const t = this;
    this.locations.forEach(l => {
      UtopiaSprite.Draw(t.p, l.sprite, {
          X: l.location.X + this.offset,
          Y: l.location.Y
        });
    });
  }

  public Update() {
    this.offset -= 2;
    const lastTile = this.locations[this.locations.length - 1];
    if (lastTile.location.X + 70 + this.offset < this.p.windowWidth) {
      this.locations.push({
        sprite: UtopiaSpriteData.grassMid,
        location: {
          X: lastTile.location.X + 70,
          Y: this.p.windowHeight - 70
        }
      });
    }
  }
}
