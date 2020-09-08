import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  isCollapsed$ = new Subject<MouseEvent>()
  setCollapsed(isCollapsed: MouseEvent) {
    this.isCollapsed$.next(isCollapsed)
  }
  constructor() { }
}
