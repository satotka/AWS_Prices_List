import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-offers',
  template: `
    <ons-list>
   <ons-list-header>Format Version</ons-list-header>
    <ons-list-item>{{offerIndex.formatVersion}}</ons-list-item>
    <ons-list-header>Disclaimer</ons-list-header>
    <ons-list-item>{{offerIndex.disclaimer}}</ons-list-item>
    <span *ngFor="let item of offerIndex.offers | keyvalue">
      <ons-list-header>{{item.key}}</ons-list-header>
      <div *ngFor="let att of item.value | keyvalue">
      {{att.key}} : {{att.value}}
      </div>
    </span>
    </ons-list>
    `
})
export class OffersComponent {
  @Input() offerIndex;

  constructor() { }
}
