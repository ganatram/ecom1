import { Injectable } from '@angular/core';
import { CartService } from './cart.model';

@Injectable()
export class Order {
  public id: number | undefined;
  public name: string | undefined;
  public address: string | undefined;
  public city: string | undefined;
  public state: string | undefined;
  public zip: string | undefined;
  public country: string | undefined;
  public shipped = false;

  constructor(public cart: CartService) {}

  clear() {
    this.id = undefined;
    this.name = this.address = this.city = undefined;
    this.state = this.zip = this.country = undefined;
    this.shipped = false;
    this.cart.clear();
  }
}
