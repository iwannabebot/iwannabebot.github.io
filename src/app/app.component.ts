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
    const dt = new Date();
    if (dt.getHours() > 18 || dt.getHours() < 4){
      this.classmode = 'day';
    } else {
      this.classmode = 'day';
    }
  }
}
