import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './profit-stat.component.html',
  styleUrls: ['./profit-stat.component.scss']
})
export class ProfitStatComponent implements OnInit {
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
