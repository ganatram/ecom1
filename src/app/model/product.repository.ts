import { RestDataSource } from './rest.datasource';
import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { StaticDataSource } from './static.datasource';

@Injectable()
export class ProductRepository {
  private products: Product[] = [];
  private categories: (string | undefined)[] = [];

  constructor(private dataSource: RestDataSource) {
    dataSource.getProducts().subscribe((data) => {
      this.products = data;
      this.categories = data
        .map((p) => p.category)
        .filter((c, index, array) => array.indexOf(c) == index)
        .sort();
    });
  }

  getProducts(category: string | undefined): Product[] {
    return this.products.filter(
      (p) => category == undefined || category == p.category,
    );
  }

  /*   getProducts(category: any): Product[] {
    return this.products.filter(
      (p) => category == null || category == p.category,
    );
  } */

  /*   getProduct(id: number): Product {
    return this.products.find((p) => p.id == id);
  } */

  getCategories(): (string | undefined)[] {
    return this.categories;
  }

  deleteProduct(id: number | undefined) {
    this.dataSource.deleteProduct(id).subscribe((p) => {
      this.products.splice(
        this.products.findIndex((p) => p.id == id),
        1,
      );
    });
  }

  getProduct(id: number | undefined): Product | undefined {
    return this.products.find((p) => p.id == id);
  }

  saveProduct(product: Product) {
    if (product.id == null || product.id == 0) {
      this.dataSource
        .saveProduct(product)
        .subscribe((p) => this.products.push(p));
    } else {
      this.dataSource.updateProduct(product).subscribe((p) => {
        this.products.splice(
          this.products.findIndex((p) => p.id == product.id),
          1,
          product,
        );
      });
    }
  }
}
