import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import * as p5 from "p5";
import {
  UtopiaSpriteDetail,
  UtopiaSprite,
  UtopiaSpriteData
} from "./sprites/sprite";
import { UtopiaPlayer } from "./models/player";
import { UtopiaFloor } from "./models/floor";
import { UtopiaHud } from './models/hud';
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
    const player = new UtopiaPlayer(p);
    const floor = new UtopiaFloor(p);
    const hud = new UtopiaHud(p, player);
    p.setup = () => {
      UtopiaSprite.Init(p);
      p.createCanvas(p.windowWidth, p.windowHeight).parent("utopia");
    };

    // http://keycode.info/
    p.keyPressed = () => {
      switch (p.keyCode) {
        case 38: {
          player.IsUp = true;
          break;
        }
      }
    };

    p.draw = () => {
      p.background(204, 254, 215);
      floor.Update();
      player.Update();
      hud.Update();
      floor.Draw();
      player.Draw();
      hud.Draw();
    };
  };
}
