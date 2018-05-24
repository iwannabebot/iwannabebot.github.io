import { Injectable } from '@angular/core';
import { Board } from '../../models/graphics/board';
import { CanvasType } from '../../models/graphics/canvas-type';
import { SpriteType } from '../../models/graphics/sprite-type';
import { SpriteSheetType } from '../../models/graphics/sprite-sheet-type';

@Injectable()
export class MyGameGraphicsService {

  constructor() { }

  public _board: Board = null;

  init(canvasB: HTMLCanvasElement,
    canvasWS: HTMLCanvasElement,
    canvasW: HTMLCanvasElement,
    canvasIS: HTMLCanvasElement,
    canvasI: HTMLCanvasElement, en: HTMLImageElement,
    hu: HTMLImageElement,
    it: HTMLImageElement,
    p1: HTMLImageElement,
    p2: HTMLImageElement,
    p3: HTMLImageElement,
    ti: HTMLImageElement,
    images: any[]) {
    this._board = new Board(canvasB, canvasWS, canvasW, canvasIS, canvasI, 32, 70);
    this._board._spriteSheets[SpriteSheetType.Enemies] = en;
    this._board._spriteSheets[SpriteSheetType.Hud] = hu;
    this._board._spriteSheets[SpriteSheetType.Items] = it;
    this._board._spriteSheets[SpriteSheetType.Player1] = p1;
    this._board._spriteSheets[SpriteSheetType.Player2] = p2;
    this._board._spriteSheets[SpriteSheetType.Player3] = p3;
    this._board._spriteSheets[SpriteSheetType.Tiles] = ti;
    const _th = this;
    images.forEach((sprt: any) => {
      _th._board._spriteSheets[sprt.id] = sprt.image
    });
    this.createSprite();
  }

  createSprite() {
    this._board._sprites['sun'] = { x: 0, y: 0, w: 200, h: 200, type: 'sun' };
    this._board._sprites['p1duck'] = { x: 365, y: 98, w: 69, h: 71, type: SpriteSheetType.Player1 };
    this._board._sprites['p1front'] = { x: 0, y: 196, w: 66, h: 92, type: SpriteSheetType.Player1 };
    this._board._sprites['p1hurt'] = { x: 438, y: 0, w: 69, h: 92, type: SpriteSheetType.Player1 };
    this._board._sprites['p1jump'] = { x: 438, y: 93, w: 67, h: 94, type: SpriteSheetType.Player1 };
    this._board._sprites['p1stand'] = { x: 67, y: 196, w: 66, h: 92, type: SpriteSheetType.Player1 };
    this._board._sprites['p1walk01'] = { x: 0, y: 0, w: 72, h: 97, type: SpriteSheetType.Player1 };
    this._board._sprites['p1walk02'] = { x: 73, y: 0, w: 72, h: 97, type: SpriteSheetType.Player1 };
    this._board._sprites['p1walk03'] = { x: 146, y: 0, w: 72, h: 97, type: SpriteSheetType.Player1 };
    this._board._sprites['p1walk04'] = { x: 0, y: 98, w: 72, h: 97, type: SpriteSheetType.Player1 };
    this._board._sprites['p1walk05'] = { x: 73, y: 98, w: 72, h: 97, type: SpriteSheetType.Player1 };
    this._board._sprites['p1walk06'] = { x: 146, y: 98, w: 72, h: 97, type: SpriteSheetType.Player1 };
    this._board._sprites['p1walk07'] = { x: 219, y: 0, w: 72, h: 97, type: SpriteSheetType.Player1 };
    this._board._sprites['p1walk08'] = { x: 292, y: 0, w: 72, h: 97, type: SpriteSheetType.Player1 };
    this._board._sprites['p1walk09'] = { x: 219, y: 98, w: 72, h: 97, type: SpriteSheetType.Player1 };
    this._board._sprites['p1walk10'] = { x: 365, y: 0, w: 72, h: 97, type: SpriteSheetType.Player1 };
    this._board._sprites['p1walk11'] = { x: 292, y: 98, w: 72, h: 97, type: SpriteSheetType.Player1 };
    this._board._sprites['p2duck'] = { x: 355, y: 95, w: 67, h: 72, type: SpriteSheetType.Player2 };
    this._board._sprites['p2front'] = { x: 0, y: 190, w: 66, h: 92, type: SpriteSheetType.Player2 };
    this._board._sprites['p2hurt'] = { x: 426, y: 0, w: 67, h: 92, type: SpriteSheetType.Player2 };
    this._board._sprites['p2jump'] = { x: 423, y: 95, w: 66, h: 94, type: SpriteSheetType.Player2 };
    this._board._sprites['p2stand'] = { x: 67, y: 190, w: 66, h: 92, type: SpriteSheetType.Player2 };
    this._board._sprites['p2walk01'] = { x: 0, y: 0, w: 70, h: 94, type: SpriteSheetType.Player2 };
    this._board._sprites['p2walk02'] = { x: 71, y: 0, w: 70, h: 94, type: SpriteSheetType.Player2 };
    this._board._sprites['p2walk03'] = { x: 142, y: 0, w: 70, h: 94, type: SpriteSheetType.Player2 };
    this._board._sprites['p2walk04'] = { x: 0, y: 95, w: 70, h: 94, type: SpriteSheetType.Player2 };
    this._board._sprites['p2walk05'] = { x: 71, y: 95, w: 70, h: 94, type: SpriteSheetType.Player2 };
    this._board._sprites['p2walk06'] = { x: 142, y: 95, w: 70, h: 94, type: SpriteSheetType.Player2 };
    this._board._sprites['p2walk07'] = { x: 213, y: 0, w: 70, h: 94, type: SpriteSheetType.Player2 };
    this._board._sprites['p2walk08'] = { x: 284, y: 0, w: 70, h: 94, type: SpriteSheetType.Player2 };
    this._board._sprites['p2walk09'] = { x: 213, y: 95, w: 70, h: 94, type: SpriteSheetType.Player2 };
    this._board._sprites['p2walk10'] = { x: 355, y: 0, w: 70, h: 94, type: SpriteSheetType.Player2 };
    this._board._sprites['p2walk11'] = { x: 284, y: 95, w: 70, h: 94, type: SpriteSheetType.Player2 };
    this._board._sprites['p3duck'] = { x: 365, y: 98, w: 69, h: 71, type: SpriteSheetType.Player3 };
    this._board._sprites['p3front'] = { x: 0, y: 196, w: 66, h: 92, type: SpriteSheetType.Player3 };
    this._board._sprites['p3hurt'] = { x: 438, y: 0, w: 69, h: 92, type: SpriteSheetType.Player3 };
    this._board._sprites['p3jump'] = { x: 438, y: 93, w: 67, h: 94, type: SpriteSheetType.Player3 };
    this._board._sprites['p3stand'] = { x: 67, y: 196, w: 66, h: 92, type: SpriteSheetType.Player3 };
    this._board._sprites['p3walk01'] = { x: 0, y: 0, w: 72, h: 97, type: SpriteSheetType.Player3 };
    this._board._sprites['p3walk02'] = { x: 73, y: 0, w: 72, h: 97, type: SpriteSheetType.Player3 };
    this._board._sprites['p3walk03'] = { x: 146, y: 0, w: 72, h: 97, type: SpriteSheetType.Player3 };
    this._board._sprites['p3walk04'] = { x: 0, y: 98, w: 72, h: 97, type: SpriteSheetType.Player3 };
    this._board._sprites['p3walk05'] = { x: 73, y: 98, w: 72, h: 97, type: SpriteSheetType.Player3 };
    this._board._sprites['p3walk06'] = { x: 146, y: 98, w: 72, h: 97, type: SpriteSheetType.Player3 };
    this._board._sprites['p3walk07'] = { x: 219, y: 0, w: 72, h: 97, type: SpriteSheetType.Player3 };
    this._board._sprites['p3walk08'] = { x: 292, y: 0, w: 72, h: 97, type: SpriteSheetType.Player3 };
    this._board._sprites['p3walk09'] = { x: 219, y: 98, w: 72, h: 97, type: SpriteSheetType.Player3 };
    this._board._sprites['p3walk10'] = { x: 365, y: 0, w: 72, h: 97, type: SpriteSheetType.Player3 };
    this._board._sprites['p3walk11'] = { x: 292, y: 98, w: 72, h: 97, type: SpriteSheetType.Player3 };
    this._board._sprites['box'] = { x: 0, y: 864, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['boxAlt'] = { x: 0, y: 792, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['boxCoin'] = { x: 0, y: 720, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['boxCoinAlt'] = { x: 0, y: 576, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['boxCoinAltdisabled'] = { x: 0, y: 504, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['boxCoindisabled'] = { x: 0, y: 648, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['boxEmpty'] = { x: 0, y: 432, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['boxExplosive'] = { x: 0, y: 360, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['boxExplosiveAlt'] = { x: 0, y: 216, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['boxExplosivedisabled'] = { x: 0, y: 288, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['boxItem'] = { x: 0, y: 144, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['boxItemAlt'] = { x: 0, y: 0, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['boxItemAltdisabled'] = { x: 432, y: 432, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['boxItemdisabled'] = { x: 0, y: 72, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['boxWarning'] = { x: 72, y: 648, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['brickWall'] = { x: 216, y: 0, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['bridge'] = { x: 216, y: 72, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['bridgeLogs'] = { x: 288, y: 720, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['castle'] = { x: 288, y: 792, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['castleCenter'] = { x: 504, y: 288, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['castleCenterrounded'] = { x: 504, y: 720, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['castleCliffLeft'] = { x: 504, y: 792, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['castleCliffLeftAlt'] = { x: 648, y: 720, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['castleCliffRight'] = { x: 648, y: 792, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['castleCliffRightAlt'] = { x: 792, y: 288, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['castleHalf'] = { x: 792, y: 360, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['castleHalfLeft'] = { x: 432, y: 720, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['castleHalfMid'] = { x: 648, y: 648, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['castleHalfRight'] = { x: 792, y: 648, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['castleHillLeft'] = { x: 648, y: 576, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['castleHillLeft2'] = { x: 792, y: 576, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['castleHillRight'] = { x: 792, y: 504, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['castleHillRight2'] = { x: 792, y: 432, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['castleLedgeLeft'] = { x: 856, y: 868, w: 5, h: 22, type: SpriteSheetType.Tiles };
    this._board._sprites['castleLedgeRight'] = { x: 842, y: 868, w: 5, h: 22, type: SpriteSheetType.Tiles };
    this._board._sprites['castleLeft'] = { x: 792, y: 216, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['castleMid'] = { x: 792, y: 144, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['castleRight'] = { x: 792, y: 72, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['dirt'] = { x: 792, y: 0, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['dirtCenter'] = { x: 720, y: 864, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['dirtCenterrounded'] = { x: 720, y: 792, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['dirtCliffLeft'] = { x: 720, y: 720, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['dirtCliffLeftAlt'] = { x: 720, y: 648, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['dirtCliffRight'] = { x: 720, y: 576, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['dirtCliffRightAlt'] = { x: 720, y: 504, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['dirtHalf'] = { x: 720, y: 432, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['dirtHalfLeft'] = { x: 720, y: 360, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['dirtHalfMid'] = { x: 720, y: 288, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['dirtHalfRight'] = { x: 720, y: 216, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['dirtHillLeft'] = { x: 720, y: 144, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['dirtHillLeft2'] = { x: 720, y: 72, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['dirtHillRight'] = { x: 720, y: 0, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['dirtHillRight2'] = { x: 648, y: 864, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['dirtLedgeLeft'] = { x: 842, y: 892, w: 5, h: 18, type: SpriteSheetType.Tiles };
    this._board._sprites['dirtLedgeRight'] = { x: 842, y: 912, w: 5, h: 18, type: SpriteSheetType.Tiles };
    this._board._sprites['dirtLeft'] = { x: 504, y: 432, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['dirtMid'] = { x: 504, y: 360, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['dirtRight'] = { x: 648, y: 504, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['doorclosedMid'] = { x: 648, y: 432, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['doorclosedTop'] = { x: 648, y: 360, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['dooropenMid'] = { x: 648, y: 288, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['dooropenTop'] = { x: 648, y: 216, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['fence'] = { x: 648, y: 144, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['fenceBroken'] = { x: 648, y: 72, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['grass'] = { x: 648, y: 0, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['grassCenter'] = { x: 576, y: 864, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['grassCenterrounded'] = { x: 576, y: 792, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['grassCliffLeft'] = { x: 576, y: 720, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['grassCliffLeftAlt'] = { x: 576, y: 648, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['grassCliffRight'] = { x: 576, y: 576, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['grassCliffRightAlt'] = { x: 576, y: 504, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['grassHalf'] = { x: 576, y: 432, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['grassHalfLeft'] = { x: 576, y: 360, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['grassHalfMid'] = { x: 576, y: 288, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['grassHalfRight'] = { x: 576, y: 216, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['grassHillLeft'] = { x: 576, y: 144, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['grassHillLeft2'] = { x: 576, y: 72, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['grassHillRight'] = { x: 576, y: 0, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['grassHillRight2'] = { x: 504, y: 864, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['grassLedgeLeft'] = { x: 849, y: 868, w: 5, h: 24, type: SpriteSheetType.Tiles };
    this._board._sprites['grassLedgeRight'] = { x: 849, y: 894, w: 5, h: 24, type: SpriteSheetType.Tiles };
    this._board._sprites['grassLeft'] = { x: 504, y: 648, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['grassMid'] = { x: 504, y: 576, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['grassRight'] = { x: 504, y: 504, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['hilllarge'] = { x: 842, y: 720, w: 48, h: 146, type: SpriteSheetType.Tiles };
    this._board._sprites['hilllargeAlt'] = { x: 864, y: 0, w: 48, h: 146, type: SpriteSheetType.Tiles };
    this._board._sprites['hillsmall'] = { x: 792, y: 828, w: 48, h: 106, type: SpriteSheetType.Tiles };
    this._board._sprites['hillsmallAlt'] = { x: 792, y: 720, w: 48, h: 106, type: SpriteSheetType.Tiles };
    this._board._sprites['laddermid'] = { x: 504, y: 144, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['laddertop'] = { x: 504, y: 72, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['liquidLava'] = { x: 504, y: 0, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['liquidLavaTop'] = { x: 432, y: 864, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['liquidLavaTopmid'] = { x: 432, y: 792, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['liquidWater'] = { x: 504, y: 216, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['liquidWaterTop'] = { x: 432, y: 648, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['liquidWaterTopmid'] = { x: 432, y: 576, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['lockblue'] = { x: 432, y: 504, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['lockgreen'] = { x: 72, y: 576, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['lockred'] = { x: 432, y: 360, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['lockyellow'] = { x: 432, y: 288, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['stoneHillLeft'] = { x: 432, y: 216, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['stoneHillRight'] = { x: 432, y: 144, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['ropeAttached'] = { x: 432, y: 72, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['ropeHorizontal'] = { x: 432, y: 0, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['ropeVertical'] = { x: 360, y: 864, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['sand'] = { x: 360, y: 792, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['sandCenter'] = { x: 576, y: 864, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['sandCenterrounded'] = { x: 576, y: 792, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['sandCliffLeft'] = { x: 360, y: 720, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['sandCliffLeftAlt'] = { x: 360, y: 648, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['sandCliffRight'] = { x: 360, y: 576, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['sandCliffRightAlt'] = { x: 360, y: 504, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['sandHalf'] = { x: 360, y: 432, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['sandHalfLeft'] = { x: 360, y: 360, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['sandHalfMid'] = { x: 360, y: 288, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['sandHalfRight'] = { x: 360, y: 216, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['sandHillLeft'] = { x: 360, y: 144, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['sandHillLeft2'] = { x: 360, y: 72, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['sandHillRight'] = { x: 360, y: 0, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['sandHillRight2'] = { x: 288, y: 864, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['sandLedgeLeft'] = { x: 856, y: 892, w: 5, h: 18, type: SpriteSheetType.Tiles };
    this._board._sprites['sandLedgeRight'] = { x: 856, y: 912, w: 5, h: 18, type: SpriteSheetType.Tiles };
    this._board._sprites['sandLeft'] = { x: 288, y: 648, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['sandMid'] = { x: 288, y: 576, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['sandRight'] = { x: 288, y: 504, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['sign'] = { x: 288, y: 432, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['signExit'] = { x: 288, y: 360, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['signLeft'] = { x: 288, y: 288, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['signRight'] = { x: 288, y: 216, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['snow'] = { x: 288, y: 144, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['snowCenter'] = { x: 720, y: 864, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['snowCenterrounded'] = { x: 288, y: 72, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['snowCliffLeft'] = { x: 288, y: 0, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['snowCliffLeftAlt'] = { x: 216, y: 864, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['snowCliffRight'] = { x: 216, y: 792, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['snowCliffRightAlt'] = { x: 216, y: 720, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['snowHalf'] = { x: 216, y: 648, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['snowHalfLeft'] = { x: 216, y: 576, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['snowHalfMid'] = { x: 216, y: 504, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['snowHalfRight'] = { x: 216, y: 432, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['snowHillLeft'] = { x: 216, y: 360, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['snowHillLeft2'] = { x: 216, y: 288, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['snowHillRight'] = { x: 216, y: 216, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['snowHillRight2'] = { x: 216, y: 144, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['snowLedgeLeft'] = { x: 863, y: 868, w: 5, h: 18, type: SpriteSheetType.Tiles };
    this._board._sprites['snowLedgeRight'] = { x: 863, y: 888, w: 5, h: 18, type: SpriteSheetType.Tiles };
    this._board._sprites['snowLeft'] = { x: 144, y: 864, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['snowMid'] = { x: 144, y: 792, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['snowRight'] = { x: 144, y: 720, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['stone'] = { x: 144, y: 648, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['stoneCenter'] = { x: 144, y: 576, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['stoneCenterrounded'] = { x: 144, y: 504, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['stoneCliffLeft'] = { x: 144, y: 432, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['stoneCliffLeftAlt'] = { x: 144, y: 360, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['stoneCliffRight'] = { x: 144, y: 288, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['stoneCliffRightAlt'] = { x: 144, y: 216, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['stoneHalf'] = { x: 144, y: 144, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['stoneHalfLeft'] = { x: 144, y: 72, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['stoneHalfMid'] = { x: 144, y: 0, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['stoneHalfRight'] = { x: 72, y: 864, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['stoneHillLeft2'] = { x: 72, y: 792, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['stoneHillRight2'] = { x: 72, y: 720, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['stoneLedgeLeft'] = { x: 863, y: 908, w: 5, h: 24, type: SpriteSheetType.Tiles };
    this._board._sprites['stoneLedgeRight'] = { x: 864, y: 148, w: 5, h: 24, type: SpriteSheetType.Tiles };
    this._board._sprites['stoneLeft'] = { x: 72, y: 504, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['stoneMid'] = { x: 72, y: 432, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['stoneRight'] = { x: 72, y: 360, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['stoneWall'] = { x: 72, y: 288, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['tochLit'] = { x: 72, y: 216, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['tochLit2'] = { x: 72, y: 144, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['torch'] = { x: 72, y: 72, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['window'] = { x: 72, y: 0, w: 70, h: 70, type: SpriteSheetType.Tiles };

    this._board._sprites['grassMidCorner'] = { x: 914, y: 0, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['grassRightCorner'] = { x: 986, y: 0, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['grassLeftCorner'] = { x: 1058, y: 0, w: 70, h: 70, type: SpriteSheetType.Tiles };

    this._board._sprites['stoneMidCorner'] = { x: 914, y: 72, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['stoneRightCorner'] = { x: 986, y: 72, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['stoneLeftCorner'] = { x: 1058, y: 72, w: 70, h: 70, type: SpriteSheetType.Tiles };

    this._board._sprites['snowMidCorner'] = { x: 914, y: 144, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['snowRightCorner'] = { x: 986, y: 144, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['snowLeftCorner'] = { x: 1058, y: 144, w: 70, h: 70, type: SpriteSheetType.Tiles };

    this._board._sprites['sandMidCorner'] = { x: 914, y: 216, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['sandRightCorner'] = { x: 986, y: 216, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['sandLeftCorner'] = { x: 1058, y: 216, w: 70, h: 70, type: SpriteSheetType.Tiles };

    this._board._sprites['dirtMidCorner'] = { x: 914, y: 288, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['dirtRightCorner'] = { x: 986, y: 288, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['dirtLeftCorner'] = { x: 1058, y: 288, w: 70, h: 70, type: SpriteSheetType.Tiles };

    this._board._sprites['castleMidCorner'] = { x: 914, y: 360, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['castleRightCorner'] = { x: 986, y: 360, w: 70, h: 70, type: SpriteSheetType.Tiles };
    this._board._sprites['castleLeftCorner'] = { x: 1058, y: 360, w: 70, h: 70, type: SpriteSheetType.Tiles };

    this._board._sprites['bomb'] = { x: 432, y: 432, w: 70, h: 70, type: SpriteSheetType.Items };
    this._board._sprites['bombFlash'] = { x: 432, y: 360, w: 70, h: 70, type: SpriteSheetType.Items };
    this._board._sprites['bush'] = { x: 346, y: 144, w: 70, h: 70, type: SpriteSheetType.Items };
    this._board._sprites['buttonBlue'] = { x: 288, y: 504, w: 70, h: 70, type: SpriteSheetType.Items };
    this._board._sprites['buttonBluepressed'] = { x: 419, y: 72, w: 70, h: 70, type: SpriteSheetType.Items };
    this._board._sprites['buttonGreen'] = { x: 419, y: 0, w: 70, h: 70, type: SpriteSheetType.Items };
    this._board._sprites['buttonGreenpressed'] = { x: 418, y: 144, w: 70, h: 70, type: SpriteSheetType.Items };
    this._board._sprites['buttonRed'] = { x: 360, y: 504, w: 70, h: 70, type: SpriteSheetType.Items };
    this._board._sprites['buttonRedpressed'] = { x: 360, y: 432, w: 70, h: 70, type: SpriteSheetType.Items };
    this._board._sprites['buttonYellow'] = { x: 360, y: 360, w: 70, h: 70, type: SpriteSheetType.Items };
    this._board._sprites['buttonYellowpressed'] = { x: 360, y: 288, w: 70, h: 70, type: SpriteSheetType.Items };
    this._board._sprites['cactus'] = { x: 360, y: 216, w: 70, h: 70, type: SpriteSheetType.Items };
    this._board._sprites['chain'] = { x: 347, y: 72, w: 70, h: 70, type: SpriteSheetType.Items };
    this._board._sprites['cloud1'] = { x: 0, y: 146, w: 128, h: 71, type: SpriteSheetType.Items };
    this._board._sprites['cloud2'] = { x: 0, y: 73, w: 129, h: 71, type: SpriteSheetType.Items };
    this._board._sprites['cloud3'] = { x: 0, y: 0, w: 129, h: 71, type: SpriteSheetType.Items };
    this._board._sprites['coinBronze'] = { x: 288, y: 432, w: 70, h: 70, type: SpriteSheetType.Items };
    this._board._sprites['coinGold'] = { x: 288, y: 360, w: 70, h: 70, type: SpriteSheetType.Items };
    this._board._sprites['coinSilver'] = { x: 288, y: 288, w: 70, h: 70, type: SpriteSheetType.Items };
    this._board._sprites['fireball'] = { x: 0, y: 435, w: 70, h: 70, type: SpriteSheetType.Items };
    this._board._sprites['flagBlue'] = { x: 275, y: 72, w: 70, h: 70, type: SpriteSheetType.Items };
    this._board._sprites['flagBlue2'] = { x: 275, y: 0, w: 70, h: 70, type: SpriteSheetType.Items };
    this._board._sprites['flagBlueHanging'] = { x: 216, y: 504, w: 70, h: 70, type: SpriteSheetType.Items };
    this._board._sprites['flagGreen'] = { x: 216, y: 432, w: 70, h: 70, type: SpriteSheetType.Items };
    this._board._sprites['flagGreen2'] = { x: 216, y: 360, w: 70, h: 70, type: SpriteSheetType.Items };
    this._board._sprites['flagGreenHanging'] = { x: 216, y: 288, w: 70, h: 70, type: SpriteSheetType.Items };
    this._board._sprites['flagRed'] = { x: 274, y: 144, w: 70, h: 70, type: SpriteSheetType.Items };
    this._board._sprites['flagRed2'] = { x: 216, y: 216, w: 70, h: 70, type: SpriteSheetType.Items };
    this._board._sprites['flagRedHanging'] = { x: 203, y: 72, w: 70, h: 70, type: SpriteSheetType.Items };
    this._board._sprites['flagYellow'] = { x: 203, y: 0, w: 70, h: 70, type: SpriteSheetType.Items };
    this._board._sprites['flagYellow2'] = { x: 202, y: 144, w: 70, h: 70, type: SpriteSheetType.Items };
    this._board._sprites['flagYellowHanging'] = { x: 144, y: 434, w: 70, h: 70, type: SpriteSheetType.Items };
    this._board._sprites['gemBlue'] = { x: 144, y: 362, w: 70, h: 70, type: SpriteSheetType.Items };
    this._board._sprites['gemGreen'] = { x: 144, y: 290, w: 70, h: 70, type: SpriteSheetType.Items };
    this._board._sprites['gemRed'] = { x: 144, y: 218, w: 70, h: 70, type: SpriteSheetType.Items };
    this._board._sprites['gemYellow'] = { x: 131, y: 72, w: 70, h: 70, type: SpriteSheetType.Items };
    this._board._sprites['keyBlue'] = { x: 131, y: 0, w: 70, h: 70, type: SpriteSheetType.Items };
    this._board._sprites['keyGreen'] = { x: 130, y: 146, w: 70, h: 70, type: SpriteSheetType.Items };
    this._board._sprites['keyRed'] = { x: 72, y: 435, w: 70, h: 70, type: SpriteSheetType.Items };
    this._board._sprites['keyYellow'] = { x: 72, y: 363, w: 70, h: 70, type: SpriteSheetType.Items };
    this._board._sprites['mushroomBrown'] = { x: 72, y: 291, w: 70, h: 70, type: SpriteSheetType.Items };
    this._board._sprites['mushroomRed'] = { x: 72, y: 219, w: 70, h: 70, type: SpriteSheetType.Items };
    this._board._sprites['particleBrick1a'] = { x: 0, y: 553, w: 19, h: 14, type: SpriteSheetType.Items };
    this._board._sprites['particleBrick1b'] = { x: 0, y: 530, w: 21, h: 21, type: SpriteSheetType.Items };
    this._board._sprites['particleBrick2a'] = { x: 21, y: 553, w: 19, h: 14, type: SpriteSheetType.Items };
    this._board._sprites['particleBrick2b'] = { x: 0, y: 507, w: 21, h: 21, type: SpriteSheetType.Items };
    this._board._sprites['plant'] = { x: 0, y: 363, w: 70, h: 70, type: SpriteSheetType.Items };
    this._board._sprites['plantPurple'] = { x: 0, y: 291, w: 70, h: 70, type: SpriteSheetType.Items };
    this._board._sprites['rock'] = { x: 0, y: 219, w: 70, h: 70, type: SpriteSheetType.Items };
    this._board._sprites['snowhill'] = { x: 288, y: 216, w: 70, h: 70, type: SpriteSheetType.Items };
    this._board._sprites['spikes'] = { x: 347, y: 0, w: 70, h: 70, type: SpriteSheetType.Items };
    this._board._sprites['springboardDown'] = { x: 432, y: 288, w: 70, h: 70, type: SpriteSheetType.Items };
    this._board._sprites['springboardUp'] = { x: 432, y: 216, w: 70, h: 70, type: SpriteSheetType.Items };
    this._board._sprites['star'] = { x: 504, y: 288, w: 70, h: 70, type: SpriteSheetType.Items };
    this._board._sprites['switchLeft'] = { x: 504, y: 216, w: 70, h: 70, type: SpriteSheetType.Items };
    this._board._sprites['switchMid'] = { x: 491, y: 72, w: 70, h: 70, type: SpriteSheetType.Items };
    this._board._sprites['switchRight'] = { x: 491, y: 0, w: 70, h: 70, type: SpriteSheetType.Items };
    this._board._sprites['weight'] = { x: 490, y: 144, w: 70, h: 70, type: SpriteSheetType.Items };
    this._board._sprites['weightChained'] = { x: 432, y: 504, w: 70, h: 70, type: SpriteSheetType.Items };
    this._board._sprites['hud0'] = { x: 230, y: 0, w: 30, h: 38, type: SpriteSheetType.Hud };
    this._board._sprites['hud1'] = { x: 196, y: 41, w: 26, h: 37, type: SpriteSheetType.Hud };
    this._board._sprites['hud2'] = { x: 55, y: 98, w: 32, h: 38, type: SpriteSheetType.Hud };
    this._board._sprites['hud3'] = { x: 239, y: 80, w: 28, h: 38, type: SpriteSheetType.Hud };
    this._board._sprites['hud4'] = { x: 238, y: 122, w: 29, h: 38, type: SpriteSheetType.Hud };
    this._board._sprites['hud5'] = { x: 238, y: 162, w: 28, h: 38, type: SpriteSheetType.Hud };
    this._board._sprites['hud6'] = { x: 230, y: 40, w: 30, h: 38, type: SpriteSheetType.Hud };
    this._board._sprites['hud7'] = { x: 226, y: 206, w: 32, h: 39, type: SpriteSheetType.Hud };
    this._board._sprites['hud8'] = { x: 192, y: 206, w: 32, h: 40, type: SpriteSheetType.Hud };
    this._board._sprites['hud9'] = { x: 196, y: 0, w: 32, h: 39, type: SpriteSheetType.Hud };
    this._board._sprites['hudcoins'] = { x: 55, y: 0, w: 47, h: 47, type: SpriteSheetType.Hud };
    this._board._sprites['hudgem_blue'] = { x: 104, y: 0, w: 46, h: 36, type: SpriteSheetType.Hud };
    this._board._sprites['hudgem_green'] = { x: 98, y: 185, w: 46, h: 36, type: SpriteSheetType.Hud };
    this._board._sprites['hudgem_red'] = { x: 98, y: 147, w: 46, h: 36, type: SpriteSheetType.Hud };
    this._board._sprites['hudgem_yellow'] = { x: 98, y: 223, w: 46, h: 36, type: SpriteSheetType.Hud };
    this._board._sprites['hudheartEmpty'] = { x: 0, y: 47, w: 53, h: 45, type: SpriteSheetType.Hud };
    this._board._sprites['hudheartFull'] = { x: 0, y: 94, w: 53, h: 45, type: SpriteSheetType.Hud };
    this._board._sprites['hudheartHalf'] = { x: 0, y: 0, w: 53, h: 45, type: SpriteSheetType.Hud };
    this._board._sprites['hudkeyBlue'] = { x: 146, y: 147, w: 44, h: 40, type: SpriteSheetType.Hud };
    this._board._sprites['hudkeyBlue_disabled'] = { x: 150, y: 38, w: 44, h: 40, type: SpriteSheetType.Hud };
    this._board._sprites['hudkeyGreem_disabled'] = { x: 104, y: 38, w: 44, h: 40, type: SpriteSheetType.Hud };
    this._board._sprites['hudkeyGreen'] = { x: 192, y: 122, w: 44, h: 40, type: SpriteSheetType.Hud };
    this._board._sprites['hudkeyRed'] = { x: 193, y: 80, w: 44, h: 40, type: SpriteSheetType.Hud };
    this._board._sprites['hudkeyRed_disabled'] = { x: 192, y: 164, w: 44, h: 40, type: SpriteSheetType.Hud };
    this._board._sprites['hudkeyYellow'] = { x: 146, y: 189, w: 44, h: 40, type: SpriteSheetType.Hud };
    this._board._sprites['hudkeyYellow_disabled'] = { x: 147, y: 80, w: 44, h: 40, type: SpriteSheetType.Hud };
    this._board._sprites['hudp1'] = { x: 55, y: 49, w: 47, h: 47, type: SpriteSheetType.Hud };
    this._board._sprites['hudp1Alt'] = { x: 0, y: 141, w: 47, h: 47, type: SpriteSheetType.Hud };
    this._board._sprites['hudp2'] = { x: 49, y: 141, w: 47, h: 47, type: SpriteSheetType.Hud };
    this._board._sprites['hudp2Alt'] = { x: 0, y: 190, w: 47, h: 47, type: SpriteSheetType.Hud };
    this._board._sprites['hudp3'] = { x: 49, y: 190, w: 47, h: 47, type: SpriteSheetType.Hud };
    this._board._sprites['hudp3Alt'] = { x: 98, y: 98, w: 47, h: 47, type: SpriteSheetType.Hud };
    this._board._sprites['hudx'] = { x: 0, y: 239, w: 30, h: 28, type: SpriteSheetType.Hud };
    this._board._sprites['blockerBody'] = { x: 203, y: 0, w: 51, h: 51, type: SpriteSheetType.Enemies };
    this._board._sprites['blockerMad'] = { x: 136, y: 66, w: 51, h: 51, type: SpriteSheetType.Enemies };
    this._board._sprites['blockerSad'] = { x: 188, y: 66, w: 51, h: 51, type: SpriteSheetType.Enemies };
    this._board._sprites['fishDead'] = { x: 0, y: 69, w: 66, h: 42, type: SpriteSheetType.Enemies };
    this._board._sprites['fishSwim1'] = { x: 76, y: 0, w: 66, h: 42, type: SpriteSheetType.Enemies };
    this._board._sprites['fishSwim2'] = { x: 73, y: 43, w: 62, h: 43, type: SpriteSheetType.Enemies };
    this._board._sprites['flyDead'] = { x: 143, y: 0, w: 59, h: 33, type: SpriteSheetType.Enemies };
    this._board._sprites['flyFly1'] = { x: 0, y: 32, w: 72, h: 36, type: SpriteSheetType.Enemies };
    this._board._sprites['flyFly2'] = { x: 0, y: 0, w: 75, h: 31, type: SpriteSheetType.Enemies };
    this._board._sprites['pokerMad'] = { x: 255, y: 0, w: 48, h: 146, type: SpriteSheetType.Enemies };
    this._board._sprites['pokerSad'] = { x: 304, y: 0, w: 48, h: 146, type: SpriteSheetType.Enemies };
    this._board._sprites['slimeDead'] = { x: 0, y: 112, w: 59, h: 12, type: SpriteSheetType.Enemies };
    this._board._sprites['slimeWalk1'] = { x: 52, y: 125, w: 50, h: 28, type: SpriteSheetType.Enemies };
    this._board._sprites['slimeWalk2'] = { x: 0, y: 125, w: 51, h: 26, type: SpriteSheetType.Enemies };
    this._board._sprites['snailShell'] = { x: 103, y: 119, w: 44, h: 30, type: SpriteSheetType.Enemies };
    this._board._sprites['snailShellupsidedown'] = { x: 148, y: 118, w: 44, h: 30, type: SpriteSheetType.Enemies };
    this._board._sprites['snailWalk1'] = { x: 143, y: 34, w: 54, h: 31, type: SpriteSheetType.Enemies };
    this._board._sprites['snailWalk2'] = { x: 67, y: 87, w: 57, h: 31, type: SpriteSheetType.Enemies };

  }

  drawBackground(spriteSheetType: SpriteType, bx: number, by: number, scaleX?: number, scaleY?: number, rotateInDegree?: number ) {
    this._board.coverRectangle(CanvasType.Background, spriteSheetType, bx, by, scaleX, scaleY);
  }

  drawWorld(spriteSheetType: SpriteType, bx: number, by: number): any {
    this._board.drawImage(CanvasType.World, spriteSheetType, bx, by);
  }

  drawObject(spriteSheetType: SpriteType, bx: number, by: number): any {
    this._board.drawImage(CanvasType.Item, spriteSheetType, bx, by);
  }

}
