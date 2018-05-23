import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Inject, OnDestroy, Input } from '@angular/core';
import { MyGameEngineService } from '../services/my-game-engine/my-game-engine.service';
import { MyGameInputService } from '../services/my-game-input/my-game-input.service';
import { MyGameStoryService } from '../services/my-game-story/my-game-story.service';
import { MyGameGraphicsService } from '../services/my-game-graphics/my-game-graphics.service';

@Component({
  selector: 'my-game-board',
  templateUrl: './my-game-board.component.html',
  styleUrls: ['./my-game-board.component.scss']
})
export class MyGameBoardComponent implements OnInit, AfterViewInit, OnDestroy {

  canvasW: HTMLCanvasElement;
  canvasI: HTMLCanvasElement;
  canvasIS: HTMLCanvasElement;
  canvasWS: HTMLCanvasElement;
  canvasB: HTMLCanvasElement;

  @Input("width") public width: number;
  @Input("height") public height: number;

  @ViewChild("host") public host: ElementRef;
  @ViewChild("sunShiny") public sunShiny: ElementRef;
  @ViewChild("enemiesSpritesheet") public enemiesSpritesheet: ElementRef;
  @ViewChild("hudSpritesheet") public hudSpritesheet: ElementRef;
  @ViewChild("itemsSpritesheet") public itemsSpritesheet: ElementRef;
  @ViewChild("p1Spritesheet") public p1Spritesheet: ElementRef;
  @ViewChild("p2Spritesheet") public p2Spritesheet: ElementRef;
  @ViewChild("p3Spritesheet") public p3Spritesheet: ElementRef;
  @ViewChild("tilesSpritesheet") public tilesSpritesheet: ElementRef;

  constructor(
    @Inject(MyGameGraphicsService) private graphics: MyGameGraphicsService,
    @Inject(MyGameStoryService) private story: MyGameStoryService,
    @Inject(MyGameEngineService) private engine: MyGameEngineService,
    @Inject(MyGameInputService) private input: MyGameInputService,) {

  }

  ngOnInit() {

    this.canvasB = document.getElementById("canvas-bg") as HTMLCanvasElement;
    this.canvasWS = document.getElementById("canvas-world-shadow") as HTMLCanvasElement;
    this.canvasW = document.getElementById("canvas-world") as HTMLCanvasElement;
    this.canvasIS = document.getElementById("canvas-items-shadow") as HTMLCanvasElement;
    this.canvasI = document.getElementById("canvas-items") as HTMLCanvasElement;

    const elements = [
      this.enemiesSpritesheet.nativeElement as HTMLImageElement,
      this.hudSpritesheet.nativeElement as HTMLImageElement,
      this.itemsSpritesheet.nativeElement as HTMLImageElement,
      this.p1Spritesheet.nativeElement as HTMLImageElement,
      this.p2Spritesheet.nativeElement as HTMLImageElement,
      this.p3Spritesheet.nativeElement as HTMLImageElement,
      this.tilesSpritesheet.nativeElement as HTMLImageElement,
      this.sunShiny.nativeElement as HTMLImageElement
    ];

    let len = 0;
    elements.forEach(img => {
      img.onload = () => {
        len++;
        if(len === elements.length) {
          this.graphics.init(this.canvasB,
            this.canvasWS,
            this.canvasW,
            this.canvasIS,
            this.canvasI,
            elements[0], elements[1], elements[2], elements[3],
            elements[4], elements[5], elements[6],
            [
              { id: 'sun', image: elements[7] }
            ]);
          this.engine.init(this.story, this.graphics);
        }
      }
    });
  }

  ngAfterViewInit() {

  }

  ngOnDestroy() {
  }

}
