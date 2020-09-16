import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StatisticalService } from 'src/app/services/online/statistical.service';

@Component({
  templateUrl: './expense-stat.component.html',
  styleUrls: ['./expense-stat.component.scss']
})
export class ExpenseStatComponent implements OnInit {
  expenses: [] = []
  sum: number = 0
  constructor(private statisticalService: StatisticalService) { }

  ngOnInit(): void {
    this.statisticalService.getExpense().subscribe(r => {
      this.expenses = r
      this.sum = r.map((r: any) => r.price).reduce((accumulator: number, currentValue: number) => accumulator + currentValue, 0)
    })
  }
}