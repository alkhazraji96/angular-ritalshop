import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const city = 'النجف'

@Injectable({
  providedIn: 'root'
})
export class CityService {
  city$ = new BehaviorSubject<string>(city)
  setCity(city: string) {
    this.city$.next(city)
  }

  constructor() { }
}
