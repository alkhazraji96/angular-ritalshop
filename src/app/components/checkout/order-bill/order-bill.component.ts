import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { CityService } from 'src/app/services/offline/city.service';
import { Product } from 'src/app/models/product.model';
import { selectProducts } from 'src/app/store/product.selectors';
import { OrderSubmitService } from 'src/app/services/offline/order-submit.service'

@Component({
  selector: 'app-order-bill',
  templateUrl: './order-bill.component.html',
  styleUrls: ['./order-bill.component.scss']
})
export class OrderBillComponent implements OnInit {
  city: string = 'النجف'
  transport_price: number = 3000
  purchase_price: number = 0
  constructor(private cityService: CityService, private store: Store<Product[]>, private orderSubmitService: OrderSubmitService) { }

  ngOnInit(): void {
    this.cityService.city$.subscribe(city => {
      this.city = city
      if (city == 'النجف') { return this.transport_price = 3000 }
      return this.transport_price = 7000
    })
    this.store.select(selectProducts).subscribe(data => {
      this.purchase_price = data.reduce((result, content) => result + content.qty * content.client_price, 0)
    })
  }
  onBillSubmit(e: MouseEvent) {
    this.orderSubmitService.setOrderSubmit(e)
  }
}
