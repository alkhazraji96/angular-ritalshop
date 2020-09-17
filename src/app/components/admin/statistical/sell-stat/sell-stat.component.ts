import { Component, OnInit } from '@angular/core';
import { StatisticalService } from 'src/app/services/online/statistical.service'

@Component({
  templateUrl: './sell-stat.component.html',
  styleUrls: ['./sell-stat.component.scss']
})
export class SellStatComponent implements OnInit {
  sells: [] = []
  sum: number = 0
  constructor(private statisticalService: StatisticalService) { }

  ngOnInit(): void {
    this.statisticalService.getSell().subscribe(r => {
      this.sells = r
      this.sum = r.map((r: any) => r.price * r.qty).reduce((accumulator: number, currentValue: number) => accumulator + currentValue, 0)
    })
  }

}
