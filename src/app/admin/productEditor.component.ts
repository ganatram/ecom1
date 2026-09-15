import { ProductRepository } from './../model/product.repository';
import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product.model';

@Component({
  selector: 'product-editor',
  templateUrl: 'productEditor.component.html',
  standalone: false,
})
export class ProductEditorComponent {
  editing: boolean = false;
  product: Product = new Product();

  constructor(
    private activeRoute: ActivatedRoute,
    private repository: ProductRepository,
    private router: Router,
  ) {
    /*   console.log(activeRoute);
    console.log(activeRoute.snapshot.params); */
    // console.log(activeRoute.snapshot.params['mode']);
    // console.log(activeRoute.snapshot.params['id']); // 1
    // console.log(this.repository.getProduct(activeRoute.snapshot.params['id']));

    this.editing = activeRoute.snapshot.params['mode'] == 'edit';

    if (this.editing) {
      Object.assign(
        this.product,
        repository.getProduct(activeRoute.snapshot.params['id']),
      );
    }
  }
}
