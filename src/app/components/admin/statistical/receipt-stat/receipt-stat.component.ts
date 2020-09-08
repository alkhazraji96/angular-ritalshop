import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './receipt-stat.component.html',
  styleUrls: ['./receipt-stat.component.scss']
})
export class ReceiptStatComponent implements OnInit {
  sells = [
    { details: 'فرن', price: 1000, date: '11/8/2020' },
    { details: 'فرن', price: 1000, qty: 1, date: '11/8/2020' },
    { details: 'فرن', price: 1000, qty: 1, date: '11/8/2020' },
    { details: 'فرن', price: 1000, qty: 1, date: '11/8/2020' },
]
  constructor() { }

  ngOnInit(): void {
  }

}
