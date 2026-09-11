import { OrderRepository } from './order.repository';
import { Order } from './order.model';
import { CartService } from './cart.model';
import { RestDataSource } from './rest.datasource';
import { NgModule } from '@angular/core';
import { StaticDataSource } from './static.datasource';
import { ProductRepository } from './product.repository';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    { provide: StaticDataSource, useClass: RestDataSource },
    ProductRepository,
    CartService,
    Order,
    OrderRepository,
    RestDataSource,
  ], // register & launch injectables
})
export class ModelModule {}
