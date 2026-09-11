import { CheckoutComponent } from './checkout.component';
import { RouterModule } from '@angular/router';
import { CartSummary } from './cartSummary.component';
import { ModelModule } from './../model/model.module';
import { BrowserModule } from '@angular/platform-browser';
import { StoreComponent } from './store.component';
import { NgModule } from '@angular/core';
import { CartDetail } from './cartDetail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [BrowserModule, ModelModule, RouterModule, FormsModule],
  declarations: [StoreComponent, CartSummary, CartDetail, CheckoutComponent], // register & launch
  exports: [StoreComponent, CartDetail, CheckoutComponent], // sharable to other angular modules
})
export class StoreModule {}
