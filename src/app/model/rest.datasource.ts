import { Order } from './order.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';

const PROTOCOL = 'http';
const PORT = 3500;

@Injectable()
export class RestDataSource {
  baseurl: string;
  constructor(private http: HttpClient) {
    this.baseurl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }

  getProducts(): Observable<Product[]> {
    // return localhost:3500/products;
    return this.http.get<Product[]>(this.baseurl + 'products');
  }

  saveOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.baseurl + 'orders', order);
  }
}
