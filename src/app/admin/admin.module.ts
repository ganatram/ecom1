import { ProductEditorComponent } from './productEditor.Component';
import { OrderTableComponent } from './orderTable.component ';
import { ProductTableComponent } from './productTable.component';
import { AdminComponent } from './admin.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'main',
        component: AdminComponent,
        children: [
          {
            path: 'products',
            component: ProductTableComponent,
          },
          {
            path: 'orders',
            component: OrderTableComponent,
          },
          {
            path: '**',
            redirectTo: 'products',
          },
        ],
      },
      {
        path: '**',
        redirectTo: 'main',
      },
    ]),
  ],
  exports: [],
  declarations: [AdminComponent, ProductTableComponent, OrderTableComponent],
  providers: [],
})
export class AdminModule {}
