import * as p5 from "p5";
import { KeyedCollection } from "./../utility/dictionary";
import { UtopiaSpriteType } from "../enums/sprite-type";

export class UtopiaImageStore {
  Items: KeyedCollection<p5.Image>;
  constructor(p: p5) {
    this.Items = new KeyedCollection<p5.Image>();
    this.Items.Add(
      UtopiaSpriteType.Enemies,
      p.loadImage('game-sprites/enemies_spritesheet_inverted.png')
    );
    this.Items.Add(
      UtopiaSpriteType.Hud,
      p.loadImage('game-sprites/hud_spritesheet.png')
    );
    this.Items.Add(
      UtopiaSpriteType.Items,
      p.loadImage('game-sprites/items_spritesheet.png')
    );
    this.Items.Add(
      UtopiaSpriteType.Moon,
      p.loadImage('game-sprites/moon.png')
    );
    this.Items.Add(
      UtopiaSpriteType.MoonShiny,
      p.loadImage('game-sprites/moon_shiny.png')
    );
    this.Items.Add(
      UtopiaSpriteType.Player1,
      p.loadImage('game-sprites/p1_spritesheet.png')
    );
    this.Items.Add(
      UtopiaSpriteType.Player1i,
      p.loadImage('game-sprites/p1_spritesheet_inverted.png')
    );
    this.Items.Add(
      UtopiaSpriteType.Player2,
      p.loadImage('game-sprites/p2_spritesheet.png')
    );
    this.Items.Add(
      UtopiaSpriteType.Player2i,
      p.loadImage('game-sprites/p2_spritesheet_inverted.png')
    );
    this.Items.Add(
      UtopiaSpriteType.Player3,
      p.loadImage('game-sprites/p3_spritesheet.png')
    );
    this.Items.Add(
      UtopiaSpriteType.Player3i,
      p.loadImage('game-sprites/p3_spritesheet_inverted.png')
    );
    this.Items.Add(
      UtopiaSpriteType.Sun,
      p.loadImage('game-sprites/sun_shiny.png')
    );
    this.Items.Add(
      UtopiaSpriteType.Tiles,
      p.loadImage('game-sprites/tiles_spritesheet.png')
    );
  }
}
