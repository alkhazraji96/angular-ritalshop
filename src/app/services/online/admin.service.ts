import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const URL = '/api/admin'
// const devURL = 'http://192.168.0.117:4200/api/admin'


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private httpClient: HttpClient) { }
  postProduct(product: any) {
    return this.httpClient.post<any>(URL + '/product', product)
  }
  getAllProducts() {
    return this.httpClient.get<any>(URL + '/all-product')
  }
  postShipment(shipment: any) {
    return this.httpClient.post<any>(URL + '/shipment', shipment)
  }
  postSell(sell: any) {
    return this.httpClient.post<any>(URL + '/sell', sell)
  }
  postProfit(profit: any) {
    return this.httpClient.post<any>(URL + '/profit', profit)
  }
  postExpense(expense: any) {
    return this.httpClient.post<any>(URL + '/expense', expense)
  }
  postReceipt(receipt: any) {
    return this.httpClient.post<any>(URL + '/receipt', receipt)
  }
}
