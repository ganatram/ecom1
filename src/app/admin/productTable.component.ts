import { Product } from '../model/product.model';
import { ProductRepository } from './../model/product.repository';
import { Component } from '@angular/core';

@Component({
  selector: 'product-table',
  templateUrl: 'productTable.component.html',
  standalone: false,
})
export class ProductTableComponent {
  constructor(private repository: ProductRepository) {}

  getProducts(): Product[] {
    return this.repository.getProducts(undefined);
  }

  deleteProduct(id: number | undefined) {
    this.repository.deleteProduct(id);
  }
}
