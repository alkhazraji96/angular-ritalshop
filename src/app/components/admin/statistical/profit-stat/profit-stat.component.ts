import { Component, OnInit } from '@angular/core';
import { StatisticalService } from 'src/app/services/online/statistical.service';

@Component({
  templateUrl: './profit-stat.component.html',
  styleUrls: ['./profit-stat.component.scss']
})
export class ProfitStatComponent implements OnInit {
  profits: [] = [];
  sum: number = 0
  constructor(
    private statisticalService: StatisticalService
  ) { }

  ngOnInit(): void {
    this.statisticalService.getProfit().subscribe(r => {
      this.profits = this.profits = r;
      this.sum = r.map((r: any) => r.price * r.qty).reduce((accumulator: number, currentValue: number) => accumulator + currentValue, 0)
    })
  }

}