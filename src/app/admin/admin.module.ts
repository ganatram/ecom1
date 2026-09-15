import { ProductEditorComponent } from './productEditor.component';
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
            path: 'products/:mode', // shared object {mode:'create'}
            component: ProductEditorComponent,
          },
          {
            path: 'products/:mode/:id', // shared object {mode:'edit',id:1}
            component: ProductEditorComponent,
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
  declarations: [
    AdminComponent,
    ProductTableComponent,
    OrderTableComponent,
    ProductEditorComponent,
  ],
  providers: [],
})
export class AdminModule {}
