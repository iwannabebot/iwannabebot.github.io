import { IMovable } from './../behaviors/movable';
import { IDrawable } from './../behaviors/drawable';
import { ICollidable } from './../behaviors/collidable';
import { IAnimatable } from './../behaviors/animatable';

export class Hud implements IAnimatable, IDrawable, IMovable {
  update() {
    throw new Error("Method not implemented.");
  }
  draw(): never {
    throw new Error("Method not implemented.");
  }
  animate() {
    throw new Error("Method not implemented.");
  }
}
