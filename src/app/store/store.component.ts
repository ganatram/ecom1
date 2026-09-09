import { Product } from './../model/product.model';
import { Component } from '@angular/core';
import { ProductRepository } from '../model/product.repository';

@Component({
  selector: 'store',
  templateUrl: 'store.component.html',
  standalone: false,
})
export class StoreComponent {
  public selectedCategory: string | undefined = undefined;
  public productsPerPage = 4;
  public selectedPage = 1;

  constructor(private repository: ProductRepository) {}

  get products(): Product[] {
    let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
    return this.repository
      .getProducts(this.selectedCategory)
      .slice(pageIndex, pageIndex + this.productsPerPage);
  }

  get categories(): (string | undefined)[] {
    return this.repository.getCategories();
  }

  changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory;
    this.changePage(1);
  }

  changePage(newPage: number) {
    this.selectedPage = newPage;
  }

  changePageSize(newSize: any) {
    this.productsPerPage = Number(newSize.target.value);
    this.changePage(1);
  }

  get pageNumbers(): number[] {
    return Array(
      Math.ceil(
        this.repository.getProducts(this.selectedCategory).length /
          this.productsPerPage,
      ),
    )
      .fill(0)
      .map((x, i) => i + 1);
  }

  addProductToCart(product: Product) {
    console.log(product);
  }
}
