import { NgForm } from '@angular/forms';
import { Order } from './../model/order.model';
import { OrderRepository } from './../model/order.repository';
import { Component } from '@angular/core';

@Component({
  selector: 'check-out',
  templateUrl: 'checkout.component.html',
  standalone: false,
})
export class CheckoutComponent {
  orderSent = false;
  submitted = false;

  constructor(
    public repository: OrderRepository,
    public order: Order,
  ) {}

  submitOrder(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      this.repository
        .saveOrder(this.order)

        .subscribe((order) => {
          this.order.clear();
          this.orderSent = true;
          // this.submitted = false;
        });
    }
  }
}
