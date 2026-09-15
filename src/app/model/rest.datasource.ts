import { Order } from './order.model';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
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
    /*  .pipe(
      catchError((err) => {
        console.error('error caught in service', err);
        return throwError(err);
      }),
    ); */
  }

  saveOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.baseurl + 'orders', order); // onNext();
  }

  deleteProduct(id: number | undefined): Observable<Product> {
    // publish...
    return this.http.delete<Product>(`${this.baseurl}products/${id}`);
  }
}
