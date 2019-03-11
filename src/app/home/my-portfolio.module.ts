import { UtopiaComponent } from './../utopia/utopia.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPortfolioComponent } from './my-portfolio/my-portfolio.component';
import { MyGameModule } from '../my-game/my-game.module';

@NgModule({
  imports: [
    CommonModule,
    MyGameModule
  ],
  declarations: [
    MyPortfolioComponent,
    UtopiaComponent
  ],
  exports:[
    MyPortfolioComponent
  ]
})
export class MyPortfolioModule { }
