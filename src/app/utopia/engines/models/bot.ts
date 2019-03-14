import { IMovable } from './../behaviors/movable';
import { IDrawable } from './../behaviors/drawable';
import { ICollidable } from './../behaviors/collidable';
import { IAnimatable } from './../behaviors/animatable';

export class Bot implements IAnimatable, ICollidable, IDrawable, IMovable {
  update() {
    throw new Error("Method not implemented.");
  }
  draw(): never {
    throw new Error("Method not implemented.");
  }
  hasCollided(): boolean {
    throw new Error("Method not implemented.");
  }
  animate() {
    throw new Error("Method not implemented.");
  }
}
