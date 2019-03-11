import { Point } from './../behaviors/shapes/point';
import * as p5 from "p5";
import { UtopiaSprite } from "../sprites/sprite";
import { UtopiaSpriteData, UtopiaSpriteDetail } from "./../sprites/sprite";

export class UtopiaPlayer {

  private currentSprite: UtopiaSpriteDetail;
  private point: Point;
  private timeStamp = 0;
  private frameSpeedOffset = 3;

  private yoffset = 0;

  public IsLeft = false;
  public IsRight = false;
  public IsUp = false;
  public IsDown = false;

  public gravity = -0.9;
  public lift = 4;

  constructor(private p: p5) {
    this.currentSprite = UtopiaSpriteData.p1front;
    this.point = {
      X: this.p.windowWidth / 4 - 40,
      Y: p.windowHeight - 97 - 70
    };
  }

  public Draw() {
    UtopiaSprite.Draw(this.p, this.currentSprite, this.point);
  }

  public Update() {
    this.timeStamp++;
    this.MoveRight();
    this.point.Y += this.yoffset;
  }

  public MoveRight() {
    switch ((this.timeStamp / this.frameSpeedOffset + 1) % 11) {
      case 0: {
        this.currentSprite = UtopiaSpriteData.p1walk01;
        break;
      }
      case 1: {
        this.currentSprite = UtopiaSpriteData.p1walk02;
        break;
      }
      case 2: {
        this.currentSprite = UtopiaSpriteData.p1walk03;
        break;
      }
      case 3: {
        this.currentSprite = UtopiaSpriteData.p1walk04;
        break;
      }
      case 4: {
        this.currentSprite = UtopiaSpriteData.p1walk05;
        break;
      }
      case 5: {
        this.currentSprite = UtopiaSpriteData.p1walk06;
        break;
      }
      case 6: {
        this.currentSprite = UtopiaSpriteData.p1walk07;
        break;
      }
      case 7: {
        this.currentSprite = UtopiaSpriteData.p1walk08;
        break;
      }
      case 8: {
        this.currentSprite = UtopiaSpriteData.p1walk09;
        break;
      }
      case 9: {
        this.currentSprite = UtopiaSpriteData.p1walk10;
        break;
      }
      case 10: {
        this.currentSprite = UtopiaSpriteData.p1walk11;
        break;
      }
    }
  }

  public Jump() {
    this.currentSprite = UtopiaSpriteData.p1jump;
  }

  public Duck() {
    this.currentSprite = UtopiaSpriteData.p1duck;
  }
}
