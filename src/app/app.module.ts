import { StoreModule } from './store/store.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    // register -  components,directives & pipes
    AppComponent,
  ],
  imports: [BrowserModule, StoreModule],
  providers: [],
  bootstrap: [AppComponent], // launch
})
export class AppModule {} // Root level entities should not interact or support Model level entity
