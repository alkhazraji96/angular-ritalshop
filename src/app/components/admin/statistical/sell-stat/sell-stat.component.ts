import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './sell-stat.component.html',
  styleUrls: ['./sell-stat.component.scss']
})
export class SellStatComponent implements OnInit {
  sells = [
    { type: 'فرن', price: 1000, qty: 1, date: '11/8/2020' },
    { type: 'فرن', price: 1000, qty: 1, date: '11/8/2020' },
    { type: 'فرن', price: 1000, qty: 1, date: '11/8/2020' },
    { type: 'فرن', price: 1000, qty: 1, date: '11/8/2020' },
]
  constructor() { }

  ngOnInit(): void {
  }

}
