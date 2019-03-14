import { UtopiaImageStore } from './stores/images';
import * as p5 from 'p5';
import { UtopiaSpriteType } from './enums/sprite-type';

export class UtopiaSpriteEditor {

  private store: UtopiaImageStore;
  constructor(private p: p5) {
    this.store = new UtopiaImageStore(this.p);
  }

  keyInput(keyCode: number) {

  }

  draw() {
    this.p.image(
      this.store.Items.Item(UtopiaSpriteType.Items),
      0, 0);
  }
}
