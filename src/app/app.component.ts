import { Component, Output, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  classmode = '';

  constructor() {
  }

  ngOnInit() {
    switch (new Date().getHours()) {
      case 7:
      case 8:
      case 9:
      case 10:
      case 11:
      case 12:
      case 13:
      case 14:
      case 15:
      case 16:
      case 17:
        {
          this.classmode = 'day';
        }
        break;
      case 18:
      case 19:
      case 20:
      case 21:
      case 22:
      case 23:
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        {
          this.classmode = 'night';
        }
        break;
      default:
        {
          this.classmode = 'day';
        }
        break;
    }
  }
}
