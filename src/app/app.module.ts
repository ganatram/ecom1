import { CheckoutComponent } from './store/checkout.component';
import { CartDetail } from './store/cartDetail.component';
import { StoreComponent } from './store/store.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from './store/store.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreFirstGuard } from './storeFirst.guard';

@NgModule({
  declarations: [
    // register -  components,directives & pipes
    AppComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule,
    RouterModule.forRoot([
      // RouterTree -- Array of Route{}'s
      {
        path: 'store', // tracks the BrowserURL state
        canActivate: [StoreFirstGuard],
        component: StoreComponent, // accordingly serves the feature component
      },
      {
        path: 'cart', // tracks the BrowserURL state
        canActivate: [StoreFirstGuard],
        component: CartDetail, // accordingly serves the feature component
      },
      {
        path: 'checkout', // tracks the BrowserURL state
        // canActivate: [StoreFirstGuard],
        component: CheckoutComponent, // accordingly serves the feature component
      },
      {
        path: '**', // tracks the BrowserURL state
        redirectTo: '/store', // makes a state change in BrowserUrl state
      },
    ]),
  ],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent], // launch
})
export class AppModule {} // Root level entities should not interact or support Model level entity
