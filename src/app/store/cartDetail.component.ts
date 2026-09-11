import { Component } from '@angular/core';
import { CartService } from '../model/cart.model';

@Component({
  selector: 'cart-detail',
  templateUrl: 'cartDetail.component.html',
  standalone: false,
})
export class CartDetail {
  constructor(public cart: CartService) {}
}
