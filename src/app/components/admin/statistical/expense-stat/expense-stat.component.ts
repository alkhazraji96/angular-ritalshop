import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './expense-stat.component.html',
  styleUrls: ['./expense-stat.component.scss']
})
export class ExpenseStatComponent implements OnInit {
    sells = [
      { details: 'فرن', price: 1000, date: '11/8/2020' },
      { details: 'فرن', price: 1000, date: '11/8/2020' },
      { details: 'فرن', price: 1000, date: '11/8/2020' },
      { details: 'فرن', price: 1000, date: '11/8/2020' },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
