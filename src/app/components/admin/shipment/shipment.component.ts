import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.scss']
})
export class ShipmentComponent implements OnInit {
  types = ['فرن', 'اوتي', 'مروحة']
  selectedType: String = ''
  constructor() { }

  ngOnInit(): void {
  }
  onTypeClick(type: string) {
    this.selectedType = type
  }

}
