import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const devURL = 'http://192.168.0.117:4200/api/admin'

@Injectable({
  providedIn: 'root'
})
export class StatisticalService {

  constructor(private httpClient: HttpClient) { }
  getSell() {
    return this.httpClient.get<any>(devURL + '/statistical/sell')
  }
  getExpense() {
    return this.httpClient.get<any>(devURL + '/statistical/expense')
  }
  getProfit() {
    return this.httpClient.get<any>(devURL + '/statistical/profit')
  }
  getReceipt() {
    return this.httpClient.get<any>(devURL + '/statistical/receipt')
  }
}
