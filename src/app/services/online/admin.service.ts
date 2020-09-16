import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const devURL = 'http://192.168.0.117:4200/api/admin'

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private httpClient: HttpClient) { }
  postProduct(product: any) {
    return this.httpClient.post<any>(devURL + '/product', product)
  }
  getAllProducts() {
    return this.httpClient.get<any>(devURL + '/all-product')
  }
  postShipment(shipment: any) {
    return this.httpClient.post<any>(devURL + '/shipment', shipment)
  }
  postSell(sell: any) {
    return this.httpClient.post<any>(devURL + '/sell', sell)
  }
  postProfit(profit: any) {
    return this.httpClient.post<any>(devURL + '/profit', profit)
  }
  postExpense(expense: any) {
    return this.httpClient.post<any>(devURL + '/expense', expense)
  }
  postReceipt(receipt: any) {
    return this.httpClient.post<any>(devURL + '/receipt', receipt)
  }
}
