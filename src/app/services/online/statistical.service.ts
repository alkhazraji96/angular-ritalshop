import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// const devURL = 'http://192.168.0.117:4200/api/admin'
const URL = '/api/admin'

@Injectable({
  providedIn: 'root'
})
export class StatisticalService {

  constructor(private httpClient: HttpClient) { }
  getSell() {
    return this.httpClient.get<any>(URL + '/statistical/sell')
  }
  getExpense() {
    return this.httpClient.get<any>(URL + '/statistical/expense')
  }
  getProfit() {
    return this.httpClient.get<any>(URL + '/statistical/profit')
  }
  getReceipt() {
    return this.httpClient.get<any>(URL + '/statistical/receipt')
  }
}
