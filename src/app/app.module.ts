import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyPortfolioModule } from './home/my-portfolio.module';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyPortfolioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
