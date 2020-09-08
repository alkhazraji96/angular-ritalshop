import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderSubmitService {
  orderSubmit$ = new Subject<MouseEvent>()
  setOrderSubmit(orderSubmit: MouseEvent) {
    this.orderSubmit$.next(orderSubmit)
  }
  constructor() { }
}
