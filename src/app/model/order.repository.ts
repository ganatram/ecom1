import { StaticDataSource } from './static.datasource';
import { RestDataSource } from './rest.datasource';
import { Order } from './order.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class OrderRepository {
  private orders: Order[] = [];

  constructor(private dataSource: RestDataSource) {}

  saveOrder(order: Order): Observable<Order> {
    return this.dataSource.saveOrder(order);
  }
}
