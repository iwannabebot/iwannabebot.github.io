import { Component, OnInit } from '@angular/core';
import * as Rx from 'rxjs';
@Component({
  selector: 'my-portfolio',
  templateUrl: './my-portfolio.component.html',
  styleUrls: ['./my-portfolio.component.scss']
})
export class MyPortfolioComponent implements OnInit {

  public name: string;
  public names = ['Nilay'];
  public index = 0;
  public length = 0;
  public sub: any;
  public dir: boolean = true;
  constructor() {
    this.index = 0;
    this.name = this.names[this.index];
    this.length = this.name.length;

    this.sub = Rx.Observable.of(null)
      .concatMap(() => Rx.Observable.timer(100))
      .do(() => {
        if (this.length === 0) {
          this.dir = !this.dir;
          this.index = this.index + 1;
          if (this.index === this.names.length) {
            this.index = 0;
          }
        }
        if (this.dir) {
          this.length = this.length - 1;
        } else {
          this.length = this.length + 1;
        }
        this.name = this.names[this.index].substr(0, this.length);
        if (this.length === this.names[this.index].length) {
          this.dir = !this.dir;
        }
      })
      .repeat();
  }

  ngOnInit() {
    // this.sub.subscribe();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
