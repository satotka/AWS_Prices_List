import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-offers',
  template: require('./offers.component.html')
})
export class OffersComponent {
  @Input() offerIndex;

  constructor() { }
}
