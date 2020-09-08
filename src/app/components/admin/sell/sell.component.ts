import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss']
})
export class SellComponent implements OnInit {
  types = ['فرن', 'اوتي', 'مروحة']
  selectedType: String = ''
  constructor() { }

  ngOnInit(): void {
  }
  onTypeClick(type: string) {
    this.selectedType = type
  }
}
