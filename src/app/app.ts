import { Component, ViewChild } from '@angular/core';
import { OnsSplitterContent, OnsSplitterSide } from 'ngx-onsenui';

import { Page } from './page';

@Component({
  selector: 'app',
  template: '<ons-navigator [page]="page"></ons-navigator>'
})
export class MyApp {
  page = Page;
}
