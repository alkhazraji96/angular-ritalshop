import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderSubmitService {
  mouseEvent: MouseEvent = undefined
  mouseEvent$ = new Subject<MouseEvent>()
  setMouseEvent(mouseEvent: MouseEvent) {
    this.mouseEvent$.next(mouseEvent)
  }
  constructor() { }
}
