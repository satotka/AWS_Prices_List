import { Component } from '@angular/core';
import { MainPage } from './main.page';

@Component({
  selector: 'app',
  template: '<ons-navigator [page]="page"></ons-navigator>'
})
export class MyApp {
  page = MainPage;
}
