import { RestDataSource } from './rest.datasource';
import { NgModule } from '@angular/core';
import { StaticDataSource } from './static.datasource';
import { ProductRepository } from './product.repository';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    ProductRepository,
    { provide: StaticDataSource, useClass: RestDataSource },
  ], // register & launch injectables
})
export class ModelModule {}
