import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/product.model';

const devURL = 'http://192.168.0.117:4200'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }
  getProducts(page: number) {
    return this.httpClient.get<any>(devURL + '/api/product?page=' + page)
  }
  getSelectedProduct(id: string) {
    return this.httpClient.get<any>(devURL + '/api/product/' + id)
  }
  postOrder(order: any) {
    return this.httpClient.post<any>(devURL + '/api/orders', order)
  }
}