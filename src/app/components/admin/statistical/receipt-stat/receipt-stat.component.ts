import { Component, OnInit } from '@angular/core';
import { StatisticalService } from 'src/app/services/online/statistical.service';

@Component({
  templateUrl: './receipt-stat.component.html',
  styleUrls: ['./receipt-stat.component.scss']
})
export class ReceiptStatComponent implements OnInit {
  receipts: [] = []
  sum: number = 0
  constructor(private statisticalService: StatisticalService) { }

  ngOnInit(): void {
    this.statisticalService.getReceipt().subscribe(r => {
      this.receipts = r;
      this.sum = r.map((r: any) => r.price).reduce((accumulator: number, currentValue: number) => accumulator + currentValue, 0)
    })
  }

}
