import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  tapCount: number = 0;

  constructor() {}

  incrementCount() {
    this.tapCount++;
  }
}