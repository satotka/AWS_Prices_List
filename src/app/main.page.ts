import { Component, OnInit } from '@angular/core';
import { OnsNavigator } from 'ngx-onsenui';
import { PriceService } from '../services/price.service';

@Component({
  selector: 'ons-page[main]',
  template: require('./main.page.html')
})
export class MainPage implements OnInit {
  offerIndex;

  constructor(
    private navi: OnsNavigator,
    private ps: PriceService
  ) { }

  ngOnInit() {
    this.getOfferIndex();
  }

  getOfferIndex(): void {
    this.ps.getOfferIndex()
      .subscribe((offerIndex) => {
        this.offerIndex = offerIndex;
      });
  }
}
