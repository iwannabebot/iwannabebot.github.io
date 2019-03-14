// import { Point } from './../behaviors/shapes/point';
// // tslint:disable:max-line-length
// import * as p5 from 'p5';
// import { KeyedCollection } from '../utility/dictionary';

// export class UtopiaSprite {
//   public static Images: KeyedCollection<p5.Image>;
//   public static Init(p: p5) {
//     UtopiaSprite.Images = new KeyedCollection<p5.Image>();

//   }

//   public static Draw(
//     p: p5,
//     detail: UtopiaSpriteDetail,
//     location: Point
//   ) {
//     const image = UtopiaSprite.Images.Item(detail.type);
//     p.image(
//       image,
//       location.X,
//       location.Y,
//       detail.w,
//       detail.h,
//       detail.x,
//       detail.y,
//       detail.w,
//       detail.h
//     );
//     // p.noFill();
//     // p.rect(location.X, location.Y, detail.w, detail.h);
//     // p.fill('blue')
//     // p.text(`${location.X},${location.Y}`, location.X, location.Y);
//     // p.text(`${location.X + detail.w},${location.Y + detail.h}`, location.X, location.Y + 20);
//   }
// }



// export class UtopiaSpriteData {
//   public static sun: UtopiaSpriteDetail = {
//     x: 0, y: 0, w: 200, h: 200,
//     type: UtopiaSpriteType.Sun } as UtopiaSpriteDetail;
//   public static p1duck: UtopiaSpriteDetail = {
//     x: 365,
//     y: 98,
//     w: 69,
//     h: 71,
//     type: UtopiaSpriteType.Player1
//   } as UtopiaSpriteDetail;
//   public static p1front: UtopiaSpriteDetail = {
//     x: 0,
//     y: 196,
//     w: 66,
//     h: 92,
//     type: UtopiaSpriteType.Player1
//   } as UtopiaSpriteDetail;
//   public static p1hurt: UtopiaSpriteDetail = {
//     x: 438,
//     y: 0,
//     w: 69,
//     h: 92,
//     type: UtopiaSpriteType.Player1
//   } as UtopiaSpriteDetail;
//   public static p1jump: UtopiaSpriteDetail = {
//     x: 438,
//     y: 93,
//     w: 67,
//     h: 94,
//     type: UtopiaSpriteType.Player1
//   } as UtopiaSpriteDetail;
//   public static p1stand: UtopiaSpriteDetail = {
//     x: 67,
//     y: 196,
//     w: 66,
//     h: 92,
//     type: UtopiaSpriteType.Player1
//   } as UtopiaSpriteDetail;
//   public static p1walk01: UtopiaSpriteDetail = {
//     x: 0,
//     y: 0,
//     w: 72,
//     h: 97,
//     type: UtopiaSpriteType.Player1
//   } as UtopiaSpriteDetail;
//   public static p1walk02: UtopiaSpriteDetail = {
//     x: 73,
//     y: 0,
//     w: 72,
//     h: 97,
//     type: UtopiaSpriteType.Player1
//   } as UtopiaSpriteDetail;
//   public static p1walk03: UtopiaSpriteDetail = {
//     x: 146,
//     y: 0,
//     w: 72,
//     h: 97,
//     type: UtopiaSpriteType.Player1
//   } as UtopiaSpriteDetail;
//   public static p1walk04: UtopiaSpriteDetail = {
//     x: 0,
//     y: 98,
//     w: 72,
//     h: 97,
//     type: UtopiaSpriteType.Player1
//   } as UtopiaSpriteDetail;
//   public static p1walk05: UtopiaSpriteDetail = {
//     x: 73,
//     y: 98,
//     w: 72,
//     h: 97,
//     type: UtopiaSpriteType.Player1
//   } as UtopiaSpriteDetail;
//   public static p1walk06: UtopiaSpriteDetail = {
//     x: 146,
//     y: 98,
//     w: 72,
//     h: 97,
//     type: UtopiaSpriteType.Player1
//   } as UtopiaSpriteDetail;
//   public static p1walk07: UtopiaSpriteDetail = {
//     x: 219,
//     y: 0,
//     w: 72,
//     h: 97,
//     type: UtopiaSpriteType.Player1
//   } as UtopiaSpriteDetail;
//   public static p1walk08: UtopiaSpriteDetail = {
//     x: 292,
//     y: 0,
//     w: 72,
//     h: 97,
//     type: UtopiaSpriteType.Player1
//   } as UtopiaSpriteDetail;
//   public static p1walk09: UtopiaSpriteDetail = {
//     x: 219,
//     y: 98,
//     w: 72,
//     h: 97,
//     type: UtopiaSpriteType.Player1
//   } as UtopiaSpriteDetail;
//   public static p1walk10: UtopiaSpriteDetail = {
//     x: 365,
//     y: 0,
//     w: 72,
//     h: 97,
//     type: UtopiaSpriteType.Player1
//   } as UtopiaSpriteDetail;
//   public static p1walk11: UtopiaSpriteDetail = {
//     x: 292,
//     y: 98,
//     w: 72,
//     h: 97,
//     type: UtopiaSpriteType.Player1
//   } as UtopiaSpriteDetail;
//   public static p1ducki: UtopiaSpriteDetail = {
//     x: 365,
//     y: 98,
//     w: 69,
//     h: 71,
//     type: UtopiaSpriteType.Player1i
//   } as UtopiaSpriteDetail;
//   public static p1fronti: UtopiaSpriteDetail = {
//     x: 0,
//     y: 196,
//     w: 66,
//     h: 92,
//     type: UtopiaSpriteType.Player1i
//   } as UtopiaSpriteDetail;
//   public static p1hurti: UtopiaSpriteDetail = {
//     x: 438,
//     y: 0,
//     w: 69,
//     h: 92,
//     type: UtopiaSpriteType.Player1i
//   } as UtopiaSpriteDetail;
//   public static p1jumpi: UtopiaSpriteDetail = {
//     x: 438,
//     y: 93,
//     w: 67,
//     h: 94,
//     type: UtopiaSpriteType.Player1i
//   } as UtopiaSpriteDetail;
//   public static p1standi: UtopiaSpriteDetail = {
//     x: 67,
//     y: 196,
//     w: 66,
//     h: 92,
//     type: UtopiaSpriteType.Player1i
//   } as UtopiaSpriteDetail;
//   public static p1walk01i: UtopiaSpriteDetail = {
//     x: 0,
//     y: 0,
//     w: 72,
//     h: 97,
//     type: UtopiaSpriteType.Player1i
//   } as UtopiaSpriteDetail;
//   public static p1walk02i: UtopiaSpriteDetail = {
//     x: 73,
//     y: 0,
//     w: 72,
//     h: 97,
//     type: UtopiaSpriteType.Player1i
//   } as UtopiaSpriteDetail;
//   public static p1walk03i: UtopiaSpriteDetail = {
//     x: 146,
//     y: 0,
//     w: 72,
//     h: 97,
//     type: UtopiaSpriteType.Player1i
//   } as UtopiaSpriteDetail;
//   public static p1walk04i: UtopiaSpriteDetail = {
//     x: 0,
//     y: 98,
//     w: 72,
//     h: 97,
//     type: UtopiaSpriteType.Player1i
//   } as UtopiaSpriteDetail;
//   public static p1walk05i: UtopiaSpriteDetail = {
//     x: 73,
//     y: 98,
//     w: 72,
//     h: 97,
//     type: UtopiaSpriteType.Player1i
//   } as UtopiaSpriteDetail;
//   public static p1walk06i: UtopiaSpriteDetail = {
//     x: 146,
//     y: 98,
//     w: 72,
//     h: 97,
//     type: UtopiaSpriteType.Player1i
//   } as UtopiaSpriteDetail;
//   public static p1walk07i: UtopiaSpriteDetail = {
//     x: 219,
//     y: 0,
//     w: 72,
//     h: 97,
//     type: UtopiaSpriteType.Player1
//   } as UtopiaSpriteDetail;
//   public static p1walk08i: UtopiaSpriteDetail = {
//     x: 292,
//     y: 0,
//     w: 72,
//     h: 97,
//     type: UtopiaSpriteType.Player1i
//   } as UtopiaSpriteDetail;
//   public static p1walk09i: UtopiaSpriteDetail = {
//     x: 219,
//     y: 98,
//     w: 72,
//     h: 97,
//     type: UtopiaSpriteType.Player1i
//   } as UtopiaSpriteDetail;
//   public static p1walk10i: UtopiaSpriteDetail = {
//     x: 365,
//     y: 0,
//     w: 72,
//     h: 97,
//     type: UtopiaSpriteType.Player1i
//   } as UtopiaSpriteDetail;
//   public static p1walk11i: UtopiaSpriteDetail = {
//     x: 292,
//     y: 98,
//     w: 72,
//     h: 97,
//     type: UtopiaSpriteType.Player1i
//   } as UtopiaSpriteDetail;
//   public static p2duck: UtopiaSpriteDetail = {
//     x: 355,
//     y: 95,
//     w: 67,
//     h: 72,
//     type: UtopiaSpriteType.Player2
//   } as UtopiaSpriteDetail;
//   public static p2front: UtopiaSpriteDetail = {
//     x: 0,
//     y: 190,
//     w: 66,
//     h: 92,
//     type: UtopiaSpriteType.Player2
//   } as UtopiaSpriteDetail;
//   public static p2hurt: UtopiaSpriteDetail = {
//     x: 426,
//     y: 0,
//     w: 67,
//     h: 92,
//     type: UtopiaSpriteType.Player2
//   } as UtopiaSpriteDetail;
//   public static p2jump: UtopiaSpriteDetail = {
//     x: 423,
//     y: 95,
//     w: 66,
//     h: 94,
//     type: UtopiaSpriteType.Player2
//   } as UtopiaSpriteDetail;
//   public static p2stand: UtopiaSpriteDetail = {
//     x: 67,
//     y: 190,
//     w: 66,
//     h: 92,
//     type: UtopiaSpriteType.Player2
//   } as UtopiaSpriteDetail;
//   public static p2walk01: UtopiaSpriteDetail = {
//     x: 0,
//     y: 0,
//     w: 70,
//     h: 94,
//     type: UtopiaSpriteType.Player2
//   } as UtopiaSpriteDetail;
//   public static p2walk02: UtopiaSpriteDetail = {
//     x: 71,
//     y: 0,
//     w: 70,
//     h: 94,
//     type: UtopiaSpriteType.Player2
//   } as UtopiaSpriteDetail;
//   public static p2walk03: UtopiaSpriteDetail = {
//     x: 142,
//     y: 0,
//     w: 70,
//     h: 94,
//     type: UtopiaSpriteType.Player2
//   } as UtopiaSpriteDetail;
//   public static p2walk04: UtopiaSpriteDetail = {
//     x: 0,
//     y: 95,
//     w: 70,
//     h: 94,
//     type: UtopiaSpriteType.Player2
//   } as UtopiaSpriteDetail;
//   public static p2walk05: UtopiaSpriteDetail = {
//     x: 71,
//     y: 95,
//     w: 70,
//     h: 94,
//     type: UtopiaSpriteType.Player2
//   } as UtopiaSpriteDetail;
//   public static p2walk06: UtopiaSpriteDetail = {
//     x: 142,
//     y: 95,
//     w: 70,
//     h: 94,
//     type: UtopiaSpriteType.Player2
//   } as UtopiaSpriteDetail;
//   public static p2walk07: UtopiaSpriteDetail = {
//     x: 213,
//     y: 0,
//     w: 70,
//     h: 94,
//     type: UtopiaSpriteType.Player2
//   } as UtopiaSpriteDetail;
//   public static p2walk08: UtopiaSpriteDetail = {
//     x: 284,
//     y: 0,
//     w: 70,
//     h: 94,
//     type: UtopiaSpriteType.Player2
//   } as UtopiaSpriteDetail;
//   public static p2walk09: UtopiaSpriteDetail = {
//     x: 213,
//     y: 95,
//     w: 70,
//     h: 94,
//     type: UtopiaSpriteType.Player2
//   } as UtopiaSpriteDetail;
//   public static p2walk10: UtopiaSpriteDetail = {
//     x: 355,
//     y: 0,
//     w: 70,
//     h: 94,
//     type: UtopiaSpriteType.Player2
//   } as UtopiaSpriteDetail;
//   public static p2walk11: UtopiaSpriteDetail = {
//     x: 284,
//     y: 95,
//     w: 70,
//     h: 94,
//     type: UtopiaSpriteType.Player2
//   } as UtopiaSpriteDetail;
//   public static p3duck: UtopiaSpriteDetail = {
//     x: 365,
//     y: 98,
//     w: 69,
//     h: 71,
//     type: UtopiaSpriteType.Player3
//   } as UtopiaSpriteDetail;
//   public static p3front: UtopiaSpriteDetail = {
//     x: 0,
//     y: 196,
//     w: 66,
//     h: 92,
//     type: UtopiaSpriteType.Player3
//   } as UtopiaSpriteDetail;
//   public static p3hurt: UtopiaSpriteDetail = {
//     x: 438,
//     y: 0,
//     w: 69,
//     h: 92,
//     type: UtopiaSpriteType.Player3
//   } as UtopiaSpriteDetail;
//   public static p3jump: UtopiaSpriteDetail = {
//     x: 438,
//     y: 93,
//     w: 67,
//     h: 94,
//     type: UtopiaSpriteType.Player3
//   } as UtopiaSpriteDetail;
//   public static p3stand: UtopiaSpriteDetail = {
//     x: 67,
//     y: 196,
//     w: 66,
//     h: 92,
//     type: UtopiaSpriteType.Player3
//   } as UtopiaSpriteDetail;
//   public static p3walk01: UtopiaSpriteDetail = {
//     x: 0,
//     y: 0,
//     w: 72,
//     h: 97,
//     type: UtopiaSpriteType.Player3
//   } as UtopiaSpriteDetail;
//   public static p3walk02: UtopiaSpriteDetail = {
//     x: 73,
//     y: 0,
//     w: 72,
//     h: 97,
//     type: UtopiaSpriteType.Player3
//   } as UtopiaSpriteDetail;
//   public static p3walk03: UtopiaSpriteDetail = {
//     x: 146,
//     y: 0,
//     w: 72,
//     h: 97,
//     type: UtopiaSpriteType.Player3
//   } as UtopiaSpriteDetail;
//   public static p3walk04: UtopiaSpriteDetail = {
//     x: 0,
//     y: 98,
//     w: 72,
//     h: 97,
//     type: UtopiaSpriteType.Player3
//   } as UtopiaSpriteDetail;
//   public static p3walk05: UtopiaSpriteDetail = {
//     x: 73,
//     y: 98,
//     w: 72,
//     h: 97,
//     type: UtopiaSpriteType.Player3
//   } as UtopiaSpriteDetail;
//   public static p3walk06: UtopiaSpriteDetail = {
//     x: 146,
//     y: 98,
//     w: 72,
//     h: 97,
//     type: UtopiaSpriteType.Player3
//   } as UtopiaSpriteDetail;
//   public static p3walk07: UtopiaSpriteDetail = {
//     x: 219,
//     y: 0,
//     w: 72,
//     h: 97,
//     type: UtopiaSpriteType.Player3
//   } as UtopiaSpriteDetail;
//   public static p3walk08: UtopiaSpriteDetail = {
//     x: 292,
//     y: 0,
//     w: 72,
//     h: 97,
//     type: UtopiaSpriteType.Player3
//   } as UtopiaSpriteDetail;
//   public static p3walk09: UtopiaSpriteDetail = {
//     x: 219,
//     y: 98,
//     w: 72,
//     h: 97,
//     type: UtopiaSpriteType.Player3
//   } as UtopiaSpriteDetail;
//   public static p3walk10: UtopiaSpriteDetail = {
//     x: 365,
//     y: 0,
//     w: 72,
//     h: 97,
//     type: UtopiaSpriteType.Player3
//   } as UtopiaSpriteDetail;
//   public static p3walk11: UtopiaSpriteDetail = {
//     x: 292,
//     y: 98,
//     w: 72,
//     h: 97,
//     type: UtopiaSpriteType.Player3
//   } as UtopiaSpriteDetail;
//   public static box: UtopiaSpriteDetail = {
//     x: 0,
//     y: 864,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static boxAlt: UtopiaSpriteDetail = {
//     x: 0,
//     y: 792,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static boxCoin: UtopiaSpriteDetail = {
//     x: 0,
//     y: 720,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static boxCoinAlt: UtopiaSpriteDetail = {
//     x: 0,
//     y: 576,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static boxCoinAltdisabled: UtopiaSpriteDetail = {
//     x: 0,
//     y: 504,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static boxCoindisabled: UtopiaSpriteDetail = {
//     x: 0,
//     y: 648,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static boxEmpty: UtopiaSpriteDetail = {
//     x: 0,
//     y: 432,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static boxExplosive: UtopiaSpriteDetail = {
//     x: 0,
//     y: 360,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static boxExplosiveAlt: UtopiaSpriteDetail = {
//     x: 0,
//     y: 216,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static boxExplosivedisabled: UtopiaSpriteDetail = {
//     x: 0,
//     y: 288,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static boxItem: UtopiaSpriteDetail = {
//     x: 0,
//     y: 144,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static boxItemAlt: UtopiaSpriteDetail = {
//     x: 0,
//     y: 0,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static boxItemAltdisabled: UtopiaSpriteDetail = {
//     x: 432,
//     y: 432,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static boxItemdisabled: UtopiaSpriteDetail = {
//     x: 0,
//     y: 72,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static boxWarning: UtopiaSpriteDetail = {
//     x: 72,
//     y: 648,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static brickWall: UtopiaSpriteDetail = {
//     x: 216,
//     y: 0,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static bridge: UtopiaSpriteDetail = {
//     x: 216,
//     y: 72,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static bridgeLogs: UtopiaSpriteDetail = {
//     x: 288,
//     y: 720,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static castle: UtopiaSpriteDetail = {
//     x: 288,
//     y: 792,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static castleCenter: UtopiaSpriteDetail = {
//     x: 504,
//     y: 288,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static castleCenterrounded: UtopiaSpriteDetail = {
//     x: 504,
//     y: 720,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static castleCliffLeft: UtopiaSpriteDetail = {
//     x: 504,
//     y: 792,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static castleCliffLeftAlt: UtopiaSpriteDetail = {
//     x: 648,
//     y: 720,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static castleCliffRight: UtopiaSpriteDetail = {
//     x: 648,
//     y: 792,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static castleCliffRightAlt: UtopiaSpriteDetail = {
//     x: 792,
//     y: 288,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static castleHalf: UtopiaSpriteDetail = {
//     x: 792,
//     y: 360,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static castleHalfLeft: UtopiaSpriteDetail = {
//     x: 432,
//     y: 720,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static castleHalfMid: UtopiaSpriteDetail = {
//     x: 648,
//     y: 648,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static castleHalfRight: UtopiaSpriteDetail = {
//     x: 792,
//     y: 648,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static castleHillLeft: UtopiaSpriteDetail = {
//     x: 648,
//     y: 576,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static castleHillLeft2: UtopiaSpriteDetail = {
//     x: 792,
//     y: 576,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static castleHillRight: UtopiaSpriteDetail = {
//     x: 792,
//     y: 504,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static castleHillRight2: UtopiaSpriteDetail = {
//     x: 792,
//     y: 432,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static castleLedgeLeft: UtopiaSpriteDetail = {
//     x: 856,
//     y: 868,
//     w: 5,
//     h: 22,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static castleLedgeRight: UtopiaSpriteDetail = {
//     x: 842,
//     y: 868,
//     w: 5,
//     h: 22,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static castleLeft: UtopiaSpriteDetail = {
//     x: 792,
//     y: 216,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static castleMid: UtopiaSpriteDetail = {
//     x: 792,
//     y: 144,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static castleRight: UtopiaSpriteDetail = {
//     x: 792,
//     y: 72,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static dirt: UtopiaSpriteDetail = {
//     x: 792,
//     y: 0,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static dirtCenter: UtopiaSpriteDetail = {
//     x: 720,
//     y: 864,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static dirtCenterrounded: UtopiaSpriteDetail = {
//     x: 720,
//     y: 792,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static dirtCliffLeft: UtopiaSpriteDetail = {
//     x: 720,
//     y: 720,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static dirtCliffLeftAlt: UtopiaSpriteDetail = {
//     x: 720,
//     y: 648,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static dirtCliffRight: UtopiaSpriteDetail = {
//     x: 720,
//     y: 576,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static dirtCliffRightAlt: UtopiaSpriteDetail = {
//     x: 720,
//     y: 504,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static dirtHalf: UtopiaSpriteDetail = {
//     x: 720,
//     y: 432,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static dirtHalfLeft: UtopiaSpriteDetail = {
//     x: 720,
//     y: 360,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static dirtHalfMid: UtopiaSpriteDetail = {
//     x: 720,
//     y: 288,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static dirtHalfRight: UtopiaSpriteDetail = {
//     x: 720,
//     y: 216,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static dirtHillLeft: UtopiaSpriteDetail = {
//     x: 720,
//     y: 144,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static dirtHillLeft2: UtopiaSpriteDetail = {
//     x: 720,
//     y: 72,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static dirtHillRight: UtopiaSpriteDetail = {
//     x: 720,
//     y: 0,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static dirtHillRight2: UtopiaSpriteDetail = {
//     x: 648,
//     y: 864,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static dirtLedgeLeft: UtopiaSpriteDetail = {
//     x: 842,
//     y: 892,
//     w: 5,
//     h: 18,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static dirtLedgeRight: UtopiaSpriteDetail = {
//     x: 842,
//     y: 912,
//     w: 5,
//     h: 18,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static dirtLeft: UtopiaSpriteDetail = {
//     x: 504,
//     y: 432,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static dirtMid: UtopiaSpriteDetail = {
//     x: 504,
//     y: 360,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static dirtRight: UtopiaSpriteDetail = {
//     x: 648,
//     y: 504,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static doorclosedMid: UtopiaSpriteDetail = {
//     x: 648,
//     y: 432,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static doorclosedTop: UtopiaSpriteDetail = {
//     x: 648,
//     y: 360,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static dooropenMid: UtopiaSpriteDetail = {
//     x: 648,
//     y: 288,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static dooropenTop: UtopiaSpriteDetail = {
//     x: 648,
//     y: 216,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static fence: UtopiaSpriteDetail = {
//     x: 648,
//     y: 144,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static fenceBroken: UtopiaSpriteDetail = {
//     x: 648,
//     y: 72,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static grass: UtopiaSpriteDetail = {
//     x: 648,
//     y: 0,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static grassCenter: UtopiaSpriteDetail = {
//     x: 576,
//     y: 864,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static grassCenterrounded: UtopiaSpriteDetail = {
//     x: 576,
//     y: 792,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static grassCliffLeft: UtopiaSpriteDetail = {
//     x: 576,
//     y: 720,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static grassCliffLeftAlt: UtopiaSpriteDetail = {
//     x: 576,
//     y: 648,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static grassCliffRight: UtopiaSpriteDetail = {
//     x: 576,
//     y: 576,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static grassCliffRightAlt: UtopiaSpriteDetail = {
//     x: 576,
//     y: 504,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static grassHalf: UtopiaSpriteDetail = {
//     x: 576,
//     y: 432,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static grassHalfLeft: UtopiaSpriteDetail = {
//     x: 576,
//     y: 360,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static grassHalfMid: UtopiaSpriteDetail = {
//     x: 576,
//     y: 288,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static grassHalfRight: UtopiaSpriteDetail = {
//     x: 576,
//     y: 216,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static grassHillLeft: UtopiaSpriteDetail = {
//     x: 576,
//     y: 144,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static grassHillLeft2: UtopiaSpriteDetail = {
//     x: 576,
//     y: 72,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static grassHillRight: UtopiaSpriteDetail = {
//     x: 576,
//     y: 0,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static grassHillRight2: UtopiaSpriteDetail = {
//     x: 504,
//     y: 864,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static grassLedgeLeft: UtopiaSpriteDetail = {
//     x: 849,
//     y: 868,
//     w: 5,
//     h: 24,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static grassLedgeRight: UtopiaSpriteDetail = {
//     x: 849,
//     y: 894,
//     w: 5,
//     h: 24,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static grassLeft: UtopiaSpriteDetail = {
//     x: 504,
//     y: 648,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static grassMid: UtopiaSpriteDetail = {
//     x: 504,
//     y: 576,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static grassRight: UtopiaSpriteDetail = {
//     x: 504,
//     y: 504,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static hilllarge: UtopiaSpriteDetail = {
//     x: 842,
//     y: 720,
//     w: 48,
//     h: 146,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static hilllargeAlt: UtopiaSpriteDetail = {
//     x: 864,
//     y: 0,
//     w: 48,
//     h: 146,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static hillsmall: UtopiaSpriteDetail = {
//     x: 792,
//     y: 828,
//     w: 48,
//     h: 106,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static hillsmallAlt: UtopiaSpriteDetail = {
//     x: 792,
//     y: 720,
//     w: 48,
//     h: 106,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static laddermid: UtopiaSpriteDetail = {
//     x: 504,
//     y: 144,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static laddertop: UtopiaSpriteDetail = {
//     x: 504,
//     y: 72,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static liquidLava: UtopiaSpriteDetail = {
//     x: 504,
//     y: 0,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static liquidLavaTop: UtopiaSpriteDetail = {
//     x: 432,
//     y: 864,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static liquidLavaTopmid: UtopiaSpriteDetail = {
//     x: 432,
//     y: 792,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static liquidWater: UtopiaSpriteDetail = {
//     x: 504,
//     y: 216,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static liquidWaterTop: UtopiaSpriteDetail = {
//     x: 432,
//     y: 648,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static liquidWaterTopmid: UtopiaSpriteDetail = {
//     x: 432,
//     y: 576,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static lockblue: UtopiaSpriteDetail = {
//     x: 432,
//     y: 504,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static lockgreen: UtopiaSpriteDetail = {
//     x: 72,
//     y: 576,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static lockred: UtopiaSpriteDetail = {
//     x: 432,
//     y: 360,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static lockyellow: UtopiaSpriteDetail = {
//     x: 432,
//     y: 288,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static stoneHillLeft: UtopiaSpriteDetail = {
//     x: 432,
//     y: 216,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static stoneHillRight: UtopiaSpriteDetail = {
//     x: 432,
//     y: 144,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static ropeAttached: UtopiaSpriteDetail = {
//     x: 432,
//     y: 72,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static ropeHorizontal: UtopiaSpriteDetail = {
//     x: 432,
//     y: 0,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static ropeVertical: UtopiaSpriteDetail = {
//     x: 360,
//     y: 864,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static sand: UtopiaSpriteDetail = {
//     x: 360,
//     y: 792,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static sandCenter: UtopiaSpriteDetail = {
//     x: 576,
//     y: 864,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static sandCenterrounded: UtopiaSpriteDetail = {
//     x: 576,
//     y: 792,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static sandCliffLeft: UtopiaSpriteDetail = {
//     x: 360,
//     y: 720,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static sandCliffLeftAlt: UtopiaSpriteDetail = {
//     x: 360,
//     y: 648,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static sandCliffRight: UtopiaSpriteDetail = {
//     x: 360,
//     y: 576,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static sandCliffRightAlt: UtopiaSpriteDetail = {
//     x: 360,
//     y: 504,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static sandHalf: UtopiaSpriteDetail = {
//     x: 360,
//     y: 432,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static sandHalfLeft: UtopiaSpriteDetail = {
//     x: 360,
//     y: 360,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static sandHalfMid: UtopiaSpriteDetail = {
//     x: 360,
//     y: 288,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static sandHalfRight: UtopiaSpriteDetail = {
//     x: 360,
//     y: 216,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static sandHillLeft: UtopiaSpriteDetail = {
//     x: 360,
//     y: 144,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static sandHillLeft2: UtopiaSpriteDetail = {
//     x: 360,
//     y: 72,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static sandHillRight: UtopiaSpriteDetail = {
//     x: 360,
//     y: 0,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static sandHillRight2: UtopiaSpriteDetail = {
//     x: 288,
//     y: 864,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static sandLedgeLeft: UtopiaSpriteDetail = {
//     x: 856,
//     y: 892,
//     w: 5,
//     h: 18,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static sandLedgeRight: UtopiaSpriteDetail = {
//     x: 856,
//     y: 912,
//     w: 5,
//     h: 18,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static sandLeft: UtopiaSpriteDetail = {
//     x: 288,
//     y: 648,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static sandMid: UtopiaSpriteDetail = {
//     x: 288,
//     y: 576,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static sandRight: UtopiaSpriteDetail = {
//     x: 288,
//     y: 504,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static sign: UtopiaSpriteDetail = {
//     x: 288,
//     y: 432,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static signExit: UtopiaSpriteDetail = {
//     x: 288,
//     y: 360,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static signLeft: UtopiaSpriteDetail = {
//     x: 288,
//     y: 288,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static signRight: UtopiaSpriteDetail = {
//     x: 288,
//     y: 216,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static snow: UtopiaSpriteDetail = {
//     x: 288,
//     y: 144,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static snowCenter: UtopiaSpriteDetail = {
//     x: 720,
//     y: 864,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static snowCenterrounded: UtopiaSpriteDetail = {
//     x: 288,
//     y: 72,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static snowCliffLeft: UtopiaSpriteDetail = {
//     x: 288,
//     y: 0,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static snowCliffLeftAlt: UtopiaSpriteDetail = {
//     x: 216,
//     y: 864,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static snowCliffRight: UtopiaSpriteDetail = {
//     x: 216,
//     y: 792,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static snowCliffRightAlt: UtopiaSpriteDetail = {
//     x: 216,
//     y: 720,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static snowHalf: UtopiaSpriteDetail = {
//     x: 216,
//     y: 648,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static snowHalfLeft: UtopiaSpriteDetail = {
//     x: 216,
//     y: 576,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static snowHalfMid: UtopiaSpriteDetail = {
//     x: 216,
//     y: 504,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static snowHalfRight: UtopiaSpriteDetail = {
//     x: 216,
//     y: 432,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static snowHillLeft: UtopiaSpriteDetail = {
//     x: 216,
//     y: 360,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static snowHillLeft2: UtopiaSpriteDetail = {
//     x: 216,
//     y: 288,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static snowHillRight: UtopiaSpriteDetail = {
//     x: 216,
//     y: 216,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static snowHillRight2: UtopiaSpriteDetail = {
//     x: 216,
//     y: 144,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static snowLedgeLeft: UtopiaSpriteDetail = {
//     x: 863,
//     y: 868,
//     w: 5,
//     h: 18,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static snowLedgeRight: UtopiaSpriteDetail = {
//     x: 863,
//     y: 888,
//     w: 5,
//     h: 18,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static snowLeft: UtopiaSpriteDetail = {
//     x: 144,
//     y: 864,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static snowMid: UtopiaSpriteDetail = {
//     x: 144,
//     y: 792,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static snowRight: UtopiaSpriteDetail = {
//     x: 144,
//     y: 720,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static stone: UtopiaSpriteDetail = {
//     x: 144,
//     y: 648,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static stoneCenter: UtopiaSpriteDetail = {
//     x: 144,
//     y: 576,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static stoneCenterrounded: UtopiaSpriteDetail = {
//     x: 144,
//     y: 504,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static stoneCliffLeft: UtopiaSpriteDetail = {
//     x: 144,
//     y: 432,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static stoneCliffLeftAlt: UtopiaSpriteDetail = {
//     x: 144,
//     y: 360,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static stoneCliffRight: UtopiaSpriteDetail = {
//     x: 144,
//     y: 288,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static stoneCliffRightAlt: UtopiaSpriteDetail = {
//     x: 144,
//     y: 216,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static stoneHalf: UtopiaSpriteDetail = {
//     x: 144,
//     y: 144,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static stoneHalfLeft: UtopiaSpriteDetail = {
//     x: 144,
//     y: 72,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static stoneHalfMid: UtopiaSpriteDetail = {
//     x: 144,
//     y: 0,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static stoneHalfRight: UtopiaSpriteDetail = {
//     x: 72,
//     y: 864,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static stoneHillLeft2: UtopiaSpriteDetail = {
//     x: 72,
//     y: 792,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static stoneHillRight2: UtopiaSpriteDetail = {
//     x: 72,
//     y: 720,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static stoneLedgeLeft: UtopiaSpriteDetail = {
//     x: 863,
//     y: 908,
//     w: 5,
//     h: 24,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static stoneLedgeRight: UtopiaSpriteDetail = {
//     x: 864,
//     y: 148,
//     w: 5,
//     h: 24,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static stoneLeft: UtopiaSpriteDetail = {
//     x: 72,
//     y: 504,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static stoneMid: UtopiaSpriteDetail = {
//     x: 72,
//     y: 432,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static stoneRight: UtopiaSpriteDetail = {
//     x: 72,
//     y: 360,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static stoneWall: UtopiaSpriteDetail = {
//     x: 72,
//     y: 288,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static tochLit: UtopiaSpriteDetail = {
//     x: 72,
//     y: 216,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static tochLit2: UtopiaSpriteDetail = {
//     x: 72,
//     y: 144,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static torch: UtopiaSpriteDetail = {
//     x: 72,
//     y: 72,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static window: UtopiaSpriteDetail = {
//     x: 72,
//     y: 0,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;

//   public static grassMidCorner: UtopiaSpriteDetail = {
//     x: 914,
//     y: 0,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static grassRightCorner: UtopiaSpriteDetail = {
//     x: 986,
//     y: 0,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static grassLeftCorner: UtopiaSpriteDetail = {
//     x: 1058,
//     y: 0,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;

//   public static stoneMidCorner: UtopiaSpriteDetail = {
//     x: 914,
//     y: 72,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static stoneRightCorner: UtopiaSpriteDetail = {
//     x: 986,
//     y: 72,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static stoneLeftCorner: UtopiaSpriteDetail = {
//     x: 1058,
//     y: 72,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;

//   public static snowMidCorner: UtopiaSpriteDetail = {
//     x: 914,
//     y: 144,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static snowRightCorner: UtopiaSpriteDetail = {
//     x: 986,
//     y: 144,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static snowLeftCorner: UtopiaSpriteDetail = {
//     x: 1058,
//     y: 144,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;

//   public static sandMidCorner: UtopiaSpriteDetail = {
//     x: 914,
//     y: 216,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static sandRightCorner: UtopiaSpriteDetail = {
//     x: 986,
//     y: 216,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static sandLeftCorner: UtopiaSpriteDetail = {
//     x: 1058,
//     y: 216,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;

//   public static dirtMidCorner: UtopiaSpriteDetail = {
//     x: 914,
//     y: 288,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static dirtRightCorner: UtopiaSpriteDetail = {
//     x: 986,
//     y: 288,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static dirtLeftCorner: UtopiaSpriteDetail = {
//     x: 1058,
//     y: 288,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;

//   public static castleMidCorner: UtopiaSpriteDetail = {
//     x: 914,
//     y: 360,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static castleRightCorner: UtopiaSpriteDetail = {
//     x: 986,
//     y: 360,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;
//   public static castleLeftCorner: UtopiaSpriteDetail = {
//     x: 1058,
//     y: 360,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Tiles
//   } as UtopiaSpriteDetail;

//   public static bomb: UtopiaSpriteDetail = {
//     x: 432,
//     y: 432,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Items
//   } as UtopiaSpriteDetail;
//   public static bombFlash: UtopiaSpriteDetail = {
//     x: 432,
//     y: 360,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Items
//   } as UtopiaSpriteDetail;
//   public static bush: UtopiaSpriteDetail = {
//     x: 346,
//     y: 144,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Items
//   } as UtopiaSpriteDetail;
//   public static buttonBlue: UtopiaSpriteDetail = {
//     x: 288,
//     y: 504,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Items
//   } as UtopiaSpriteDetail;
//   public static buttonBluepressed: UtopiaSpriteDetail = {
//     x: 419,
//     y: 72,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Items
//   } as UtopiaSpriteDetail;
//   public static buttonGreen: UtopiaSpriteDetail = {
//     x: 419,
//     y: 0,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Items
//   } as UtopiaSpriteDetail;
//   public static buttonGreenpressed: UtopiaSpriteDetail = {
//     x: 418,
//     y: 144,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Items
//   } as UtopiaSpriteDetail;
//   public static buttonRed: UtopiaSpriteDetail = {
//     x: 360,
//     y: 504,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Items
//   } as UtopiaSpriteDetail;
//   public static buttonRedpressed: UtopiaSpriteDetail = {
//     x: 360,
//     y: 432,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Items
//   } as UtopiaSpriteDetail;
//   public static buttonYellow: UtopiaSpriteDetail = {
//     x: 360,
//     y: 360,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Items
//   } as UtopiaSpriteDetail;
//   public static buttonYellowpressed: UtopiaSpriteDetail = {
//     x: 360,
//     y: 288,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Items
//   } as UtopiaSpriteDetail;
//   public static cactus: UtopiaSpriteDetail = {
//     x: 360,
//     y: 216,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Items
//   } as UtopiaSpriteDetail;
//   public static chain: UtopiaSpriteDetail = {
//     x: 347,
//     y: 72,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Items
//   } as UtopiaSpriteDetail;
//   public static cloud1: UtopiaSpriteDetail = {
//     x: 0,
//     y: 146,
//     w: 128,
//     h: 71,
//     type: UtopiaSpriteType.Items
//   } as UtopiaSpriteDetail;
//   public static cloud2: UtopiaSpriteDetail = {
//     x: 0,
//     y: 73,
//     w: 129,
//     h: 71,
//     type: UtopiaSpriteType.Items
//   } as UtopiaSpriteDetail;
//   public static cloud3: UtopiaSpriteDetail = {
//     x: 0,
//     y: 0,
//     w: 129,
//     h: 71,
//     type: UtopiaSpriteType.Items
//   } as UtopiaSpriteDetail;
//   public static coinBronze: UtopiaSpriteDetail = {
//     x: 288,
//     y: 432,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Items
//   } as UtopiaSpriteDetail;
//   public static coinGold: UtopiaSpriteDetail = {
//     x: 288,
//     y: 360,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Items
//   } as UtopiaSpriteDetail;
//   public static coinSilver: UtopiaSpriteDetail = {
//     x: 288,
//     y: 288,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Items
//   } as UtopiaSpriteDetail;
//   public static fireball: UtopiaSpriteDetail = {
//     x: 0,
//     y: 435,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Items
//   } as UtopiaSpriteDetail;
//   public static flagBlue: UtopiaSpriteDetail = {
//     x: 275,
//     y: 72,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Items
//   } as UtopiaSpriteDetail;
//   public static flagBlue2: UtopiaSpriteDetail = {
//     x: 275,
//     y: 0,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Items
//   } as UtopiaSpriteDetail;
//   public static flagBlueHanging: UtopiaSpriteDetail = {
//     x: 216,
//     y: 504,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Items
//   } as UtopiaSpriteDetail;
//   public static flagGreen: UtopiaSpriteDetail = {
//     x: 216,
//     y: 432,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Items
//   } as UtopiaSpriteDetail;
//   public static flagGreen2: UtopiaSpriteDetail = {
//     x: 216,
//     y: 360,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Items
//   } as UtopiaSpriteDetail;
//   public static flagGreenHanging: UtopiaSpriteDetail = {
//     x: 216,
//     y: 288,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Items
//   } as UtopiaSpriteDetail;
//   public static flagRed: UtopiaSpriteDetail = {
//     x: 274,
//     y: 144,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Items
//   } as UtopiaSpriteDetail;
//   public static flagRed2: UtopiaSpriteDetail = {
//     x: 216,
//     y: 216,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Items
//   } as UtopiaSpriteDetail;
//   public static flagRedHanging: UtopiaSpriteDetail = {
//     x: 203,
//     y: 72,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Items
//   } as UtopiaSpriteDetail;
//   public static flagYellow: UtopiaSpriteDetail = {
//     x: 203,
//     y: 0,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Items
//   } as UtopiaSpriteDetail;
//   public static flagYellow2: UtopiaSpriteDetail = {
//     x: 202,
//     y: 144,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Items
//   } as UtopiaSpriteDetail;
//   public static flagYellowHanging: UtopiaSpriteDetail = {
//     x: 144,
//     y: 434,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Items
//   } as UtopiaSpriteDetail;
//   public static gemBlue: UtopiaSpriteDetail = {
//     x: 144,
//     y: 362,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Items
//   } as UtopiaSpriteDetail;
//   public static gemGreen: UtopiaSpriteDetail = {
//     x: 144,
//     y: 290,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Items
//   } as UtopiaSpriteDetail;
//   public static gemRed: UtopiaSpriteDetail = {
//     x: 144,
//     y: 218,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Items
//   } as UtopiaSpriteDetail;
//   public static gemYellow: UtopiaSpriteDetail = {
//     x: 131,
//     y: 72,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Items
//   } as UtopiaSpriteDetail;
//   public static keyBlue: UtopiaSpriteDetail = {
//     x: 131,
//     y: 0,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Items
//   } as UtopiaSpriteDetail;
//   public static keyGreen: UtopiaSpriteDetail = {
//     x: 130,
//     y: 146,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Items
//   } as UtopiaSpriteDetail;
//   public static keyRed: UtopiaSpriteDetail = {
//     x: 72,
//     y: 435,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Items
//   } as UtopiaSpriteDetail;
//   public static keyYellow: UtopiaSpriteDetail = {
//     x: 72,
//     y: 363,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Items
//   } as UtopiaSpriteDetail;
//   public static mushroomBrown: UtopiaSpriteDetail = {
//     x: 72,
//     y: 291,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Items
//   } as UtopiaSpriteDetail;
//   public static mushroomRed: UtopiaSpriteDetail = {
//     x: 72,
//     y: 219,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Items
//   } as UtopiaSpriteDetail;
//   public static particleBrick1a: UtopiaSpriteDetail = {
//     x: 0,
//     y: 553,
//     w: 19,
//     h: 14,
//     type: UtopiaSpriteType.Items
//   } as UtopiaSpriteDetail;
//   public static particleBrick1b: UtopiaSpriteDetail = {
//     x: 0,
//     y: 530,
//     w: 21,
//     h: 21,
//     type: UtopiaSpriteType.Items
//   } as UtopiaSpriteDetail;
//   public static particleBrick2a: UtopiaSpriteDetail = {
//     x: 21,
//     y: 553,
//     w: 19,
//     h: 14,
//     type: UtopiaSpriteType.Items
//   } as UtopiaSpriteDetail;
//   public static particleBrick2b: UtopiaSpriteDetail = {
//     x: 0,
//     y: 507,
//     w: 21,
//     h: 21,
//     type: UtopiaSpriteType.Items
//   } as UtopiaSpriteDetail;
//   public static plant: UtopiaSpriteDetail = {
//     x: 0,
//     y: 363,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Items
//   } as UtopiaSpriteDetail;
//   public static plantPurple: UtopiaSpriteDetail = {
//     x: 0,
//     y: 291,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Items
//   } as UtopiaSpriteDetail;
//   public static rock: UtopiaSpriteDetail = {
//     x: 0,
//     y: 219,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Items
//   } as UtopiaSpriteDetail;
//   public static snowhill: UtopiaSpriteDetail = {
//     x: 288,
//     y: 216,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Items
//   } as UtopiaSpriteDetail;
//   public static spikes: UtopiaSpriteDetail = {
//     x: 347,
//     y: 0,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Items
//   } as UtopiaSpriteDetail;
//   public static springboardDown: UtopiaSpriteDetail = {
//     x: 432,
//     y: 288,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Items
//   } as UtopiaSpriteDetail;
//   public static springboardUp: UtopiaSpriteDetail = {
//     x: 432,
//     y: 216,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Items
//   } as UtopiaSpriteDetail;
//   public static star: UtopiaSpriteDetail = {
//     x: 504,
//     y: 288,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Items
//   } as UtopiaSpriteDetail;
//   public static switchLeft: UtopiaSpriteDetail = {
//     x: 504,
//     y: 216,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Items
//   } as UtopiaSpriteDetail;
//   public static switchMid: UtopiaSpriteDetail = {
//     x: 491,
//     y: 72,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Items
//   } as UtopiaSpriteDetail;
//   public static switchRight: UtopiaSpriteDetail = {
//     x: 491,
//     y: 0,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Items
//   } as UtopiaSpriteDetail;
//   public static weight: UtopiaSpriteDetail = {
//     x: 490,
//     y: 144,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Items
//   } as UtopiaSpriteDetail;
//   public static weightChained: UtopiaSpriteDetail = {
//     x: 432,
//     y: 504,
//     w: 70,
//     h: 70,
//     type: UtopiaSpriteType.Items
//   } as UtopiaSpriteDetail;
//   public static hud0: UtopiaSpriteDetail = {
//     x: 230,
//     y: 0,
//     w: 30,
//     h: 38,
//     type: UtopiaSpriteType.Hud
//   } as UtopiaSpriteDetail;
//   public static hud1: UtopiaSpriteDetail = {
//     x: 196,
//     y: 41,
//     w: 26,
//     h: 37,
//     type: UtopiaSpriteType.Hud
//   } as UtopiaSpriteDetail;
//   public static hud2: UtopiaSpriteDetail = {
//     x: 55,
//     y: 98,
//     w: 32,
//     h: 38,
//     type: UtopiaSpriteType.Hud
//   } as UtopiaSpriteDetail;
//   public static hud3: UtopiaSpriteDetail = {
//     x: 239,
//     y: 80,
//     w: 28,
//     h: 38,
//     type: UtopiaSpriteType.Hud
//   } as UtopiaSpriteDetail;
//   public static hud4: UtopiaSpriteDetail = {
//     x: 238,
//     y: 122,
//     w: 29,
//     h: 38,
//     type: UtopiaSpriteType.Hud
//   } as UtopiaSpriteDetail;
//   public static hud5: UtopiaSpriteDetail = {
//     x: 238,
//     y: 162,
//     w: 28,
//     h: 38,
//     type: UtopiaSpriteType.Hud
//   } as UtopiaSpriteDetail;
//   public static hud6: UtopiaSpriteDetail = {
//     x: 230,
//     y: 40,
//     w: 30,
//     h: 38,
//     type: UtopiaSpriteType.Hud
//   } as UtopiaSpriteDetail;
//   public static hud7: UtopiaSpriteDetail = {
//     x: 226,
//     y: 206,
//     w: 32,
//     h: 39,
//     type: UtopiaSpriteType.Hud
//   } as UtopiaSpriteDetail;
//   public static hud8: UtopiaSpriteDetail = {
//     x: 192,
//     y: 206,
//     w: 32,
//     h: 40,
//     type: UtopiaSpriteType.Hud
//   } as UtopiaSpriteDetail;
//   public static hud9: UtopiaSpriteDetail = {
//     x: 196,
//     y: 0,
//     w: 32,
//     h: 39,
//     type: UtopiaSpriteType.Hud
//   } as UtopiaSpriteDetail;
//   public static hudcoins: UtopiaSpriteDetail = {
//     x: 55,
//     y: 0,
//     w: 47,
//     h: 47,
//     type: UtopiaSpriteType.Hud
//   } as UtopiaSpriteDetail;
//   public static hudgem_blue: UtopiaSpriteDetail = {
//     x: 104,
//     y: 0,
//     w: 46,
//     h: 36,
//     type: UtopiaSpriteType.Hud
//   } as UtopiaSpriteDetail;
//   public static hudgem_green: UtopiaSpriteDetail = {
//     x: 98,
//     y: 185,
//     w: 46,
//     h: 36,
//     type: UtopiaSpriteType.Hud
//   } as UtopiaSpriteDetail;
//   public static hudgem_red: UtopiaSpriteDetail = {
//     x: 98,
//     y: 147,
//     w: 46,
//     h: 36,
//     type: UtopiaSpriteType.Hud
//   } as UtopiaSpriteDetail;
//   public static hudgem_yellow: UtopiaSpriteDetail = {
//     x: 98,
//     y: 223,
//     w: 46,
//     h: 36,
//     type: UtopiaSpriteType.Hud
//   } as UtopiaSpriteDetail;
//   public static hudheartEmpty: UtopiaSpriteDetail = {
//     x: 0,
//     y: 47,
//     w: 53,
//     h: 45,
//     type: UtopiaSpriteType.Hud
//   } as UtopiaSpriteDetail;
//   public static hudheartFull: UtopiaSpriteDetail = {
//     x: 0,
//     y: 94,
//     w: 53,
//     h: 45,
//     type: UtopiaSpriteType.Hud
//   } as UtopiaSpriteDetail;
//   public static hudheartHalf: UtopiaSpriteDetail = {
//     x: 0,
//     y: 0,
//     w: 53,
//     h: 45,
//     type: UtopiaSpriteType.Hud
//   } as UtopiaSpriteDetail;
//   public static hudkeyBlue: UtopiaSpriteDetail = {
//     x: 146,
//     y: 147,
//     w: 44,
//     h: 40,
//     type: UtopiaSpriteType.Hud
//   } as UtopiaSpriteDetail;
//   public static hudkeyBlue_disabled: UtopiaSpriteDetail = {
//     x: 150,
//     y: 38,
//     w: 44,
//     h: 40,
//     type: UtopiaSpriteType.Hud
//   } as UtopiaSpriteDetail;
//   public static hudkeyGreem_disabled: UtopiaSpriteDetail = {
//     x: 104,
//     y: 38,
//     w: 44,
//     h: 40,
//     type: UtopiaSpriteType.Hud
//   } as UtopiaSpriteDetail;
//   public static hudkeyGreen: UtopiaSpriteDetail = {
//     x: 192,
//     y: 122,
//     w: 44,
//     h: 40,
//     type: UtopiaSpriteType.Hud
//   } as UtopiaSpriteDetail;
//   public static hudkeyRed: UtopiaSpriteDetail = {
//     x: 193,
//     y: 80,
//     w: 44,
//     h: 40,
//     type: UtopiaSpriteType.Hud
//   } as UtopiaSpriteDetail;
//   public static hudkeyRed_disabled: UtopiaSpriteDetail = {
//     x: 192,
//     y: 164,
//     w: 44,
//     h: 40,
//     type: UtopiaSpriteType.Hud
//   } as UtopiaSpriteDetail;
//   public static hudkeyYellow: UtopiaSpriteDetail = {
//     x: 146,
//     y: 189,
//     w: 44,
//     h: 40,
//     type: UtopiaSpriteType.Hud
//   } as UtopiaSpriteDetail;
//   public static hudkeyYellow_disabled: UtopiaSpriteDetail = {
//     x: 147,
//     y: 80,
//     w: 44,
//     h: 40,
//     type: UtopiaSpriteType.Hud
//   } as UtopiaSpriteDetail;
//   public static hudp1: UtopiaSpriteDetail = {
//     x: 55,
//     y: 49,
//     w: 47,
//     h: 47,
//     type: UtopiaSpriteType.Hud
//   } as UtopiaSpriteDetail;
//   public static hudp1Alt: UtopiaSpriteDetail = {
//     x: 0,
//     y: 141,
//     w: 47,
//     h: 47,
//     type: UtopiaSpriteType.Hud
//   } as UtopiaSpriteDetail;
//   public static hudp2: UtopiaSpriteDetail = {
//     x: 49,
//     y: 141,
//     w: 47,
//     h: 47,
//     type: UtopiaSpriteType.Hud
//   } as UtopiaSpriteDetail;
//   public static hudp2Alt: UtopiaSpriteDetail = {
//     x: 0,
//     y: 190,
//     w: 47,
//     h: 47,
//     type: UtopiaSpriteType.Hud
//   } as UtopiaSpriteDetail;
//   public static hudp3: UtopiaSpriteDetail = {
//     x: 49,
//     y: 190,
//     w: 47,
//     h: 47,
//     type: UtopiaSpriteType.Hud
//   } as UtopiaSpriteDetail;
//   public static hudp3Alt: UtopiaSpriteDetail = {
//     x: 98,
//     y: 98,
//     w: 47,
//     h: 47,
//     type: UtopiaSpriteType.Hud
//   } as UtopiaSpriteDetail;
//   public static hudx: UtopiaSpriteDetail = {
//     x: 0,
//     y: 239,
//     w: 30,
//     h: 28,
//     type: UtopiaSpriteType.Hud
//   } as UtopiaSpriteDetail;
//   public static blockerBody: UtopiaSpriteDetail = {
//     x: 203,
//     y: 0,
//     w: 51,
//     h: 51,
//     type: UtopiaSpriteType.Enemies
//   } as UtopiaSpriteDetail;
//   public static blockerMad: UtopiaSpriteDetail = {
//     x: 136,
//     y: 66,
//     w: 51,
//     h: 51,
//     type: UtopiaSpriteType.Enemies
//   } as UtopiaSpriteDetail;
//   public static blockerSad: UtopiaSpriteDetail = {
//     x: 188,
//     y: 66,
//     w: 51,
//     h: 51,
//     type: UtopiaSpriteType.Enemies
//   } as UtopiaSpriteDetail;
//   public static fishDead: UtopiaSpriteDetail = {
//     x: 0,
//     y: 69,
//     w: 66,
//     h: 42,
//     type: UtopiaSpriteType.Enemies
//   } as UtopiaSpriteDetail;
//   public static fishSwim1: UtopiaSpriteDetail = {
//     x: 76,
//     y: 0,
//     w: 66,
//     h: 42,
//     type: UtopiaSpriteType.Enemies
//   } as UtopiaSpriteDetail;
//   public static fishSwim2: UtopiaSpriteDetail = {
//     x: 73,
//     y: 43,
//     w: 62,
//     h: 43,
//     type: UtopiaSpriteType.Enemies
//   } as UtopiaSpriteDetail;
//   public static flyDead: UtopiaSpriteDetail = {
//     x: 143,
//     y: 0,
//     w: 59,
//     h: 33,
//     type: UtopiaSpriteType.Enemies
//   } as UtopiaSpriteDetail;
//   public static flyFly1: UtopiaSpriteDetail = {
//     x: 0,
//     y: 32,
//     w: 72,
//     h: 36,
//     type: UtopiaSpriteType.Enemies
//   } as UtopiaSpriteDetail;
//   public static flyFly2: UtopiaSpriteDetail = {
//     x: 0,
//     y: 0,
//     w: 75,
//     h: 31,
//     type: UtopiaSpriteType.Enemies
//   } as UtopiaSpriteDetail;
//   public static pokerMad: UtopiaSpriteDetail = {
//     x: 255,
//     y: 0,
//     w: 48,
//     h: 146,
//     type: UtopiaSpriteType.Enemies
//   } as UtopiaSpriteDetail;
//   public static pokerSad: UtopiaSpriteDetail = {
//     x: 304,
//     y: 0,
//     w: 48,
//     h: 146,
//     type: UtopiaSpriteType.Enemies
//   } as UtopiaSpriteDetail;
//   public static slimeDead: UtopiaSpriteDetail = {
//     x: 0,
//     y: 112,
//     w: 59,
//     h: 12,
//     type: UtopiaSpriteType.Enemies
//   } as UtopiaSpriteDetail;
//   public static slimeWalk1: UtopiaSpriteDetail = {
//     x: 52,
//     y: 125,
//     w: 50,
//     h: 28,
//     type: UtopiaSpriteType.Enemies
//   } as UtopiaSpriteDetail;
//   public static slimeWalk2: UtopiaSpriteDetail = {
//     x: 0,
//     y: 125,
//     w: 51,
//     h: 26,
//     type: UtopiaSpriteType.Enemies
//   } as UtopiaSpriteDetail;
//   public static snailShell: UtopiaSpriteDetail = {
//     x: 103,
//     y: 119,
//     w: 44,
//     h: 30,
//     type: UtopiaSpriteType.Enemies
//   } as UtopiaSpriteDetail;
//   public static snailShellupsidedown: UtopiaSpriteDetail = {
//     x: 148,
//     y: 118,
//     w: 44,
//     h: 30,
//     type: UtopiaSpriteType.Enemies
//   } as UtopiaSpriteDetail;
//   public static snailWalk1: UtopiaSpriteDetail = {
//     x: 143,
//     y: 34,
//     w: 54,
//     h: 31,
//     type: UtopiaSpriteType.Enemies
//   } as UtopiaSpriteDetail;
//   public static snailWalk2: UtopiaSpriteDetail = {
//     x: 67,
//     y: 87,
//     w: 57,
//     h: 31,
//     type: UtopiaSpriteType.Enemies
//   } as UtopiaSpriteDetail;
//   public static snailWalk1i: UtopiaSpriteDetail = {
//     x: 157,
//     y: 34,
//     w: 54,
//     h: 31,
//     type: UtopiaSpriteType.Enemiesi
//   } as UtopiaSpriteDetail;
//   public static snailWalk2i: UtopiaSpriteDetail = {
//     x: 229,
//     y: 87,
//     w: 57,
//     h: 31,
//     type: UtopiaSpriteType.Enemiesi
//   } as UtopiaSpriteDetail;
// }
