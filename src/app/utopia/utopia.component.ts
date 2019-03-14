import { UtopiaSpriteEditor } from "./engines/spriteeditor";
import { UtopiaWorld } from "./engines/world";
import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import * as p5 from "p5";
@Component({
  selector: "app-utopia",
  template: `
    <div id="utopia"></div>
  `,
  styles: [``]
})
export class UtopiaComponent implements OnInit, OnDestroy {
  private p5: p5;
  @Input() public width: number;
  @Input() public height: number;

  constructor() {}

  ngOnInit() {
    this.createCanvas();
  }

  ngOnDestroy(): void {
    this.destroyCanvas();
  }

  private onWindowResize = e => {
    this.p5.resizeCanvas(this.p5.windowWidth, this.p5.windowHeight);
  };

  private createCanvas = () => {
    this.p5 = new p5(this.drawing);
  };

  private destroyCanvas = () => {
    this.p5.noCanvas();
  };

  private drawing = function(p: p5) {
    let spriteEditor: UtopiaSpriteEditor;
    p.setup = () => {
      spriteEditor = new UtopiaSpriteEditor(p);
      p.createCanvas(p.windowWidth, p.windowHeight).parent("utopia");
    };

    // http://keycode.info/
    p.keyPressed = () => {
      spriteEditor.keyInput(p.keyCode);
    };

    p.mouseClicked = () => {

    };

    p.mouseDragged = () => {};

    p.mouseMoved = () => {};

    p.mousePressed = () => {};

    p.mouseReleased = () => {};

    p.mouseWheel = () => {};

    p.draw = () => {
      spriteEditor.draw();
    };
  };
}
