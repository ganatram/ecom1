import { Component } from '@angular/core';
import { CartService } from '../model/cart.model';

@Component({
  selector: 'cart-summary',
  templateUrl: 'cartSummary.component.html',
  standalone: false,
})
export class CartSummary {
  constructor(public cart: CartService) {}
}
