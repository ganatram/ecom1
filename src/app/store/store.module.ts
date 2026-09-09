import { ModelModule } from './../model/model.module';
import { BrowserModule } from '@angular/platform-browser';
import { StoreComponent } from './store.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [BrowserModule, ModelModule],
  declarations: [StoreComponent], // register & launch
  exports: [StoreComponent], // sharable to other angular modules
})
export class StoreModule {}
