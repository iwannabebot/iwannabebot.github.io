import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPortfolioComponent } from './my-portfolio/my-portfolio.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MyPortfolioComponent
  ],
  exports:[
    MyPortfolioComponent
  ]
})
export class MyPortfolioModule { }
