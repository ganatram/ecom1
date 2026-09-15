import { CheckoutComponent } from './store/checkout.component';
import { CartDetail } from './store/cartDetail.component';
import { StoreComponent } from './store/store.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from './store/store.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreFirstGuard } from './storeFirst.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyHttpInterceptorService } from './model/httpInterceptor-service';

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
        path: 'store',
        // canActivate: [StoreFirstGuard],
        component: StoreComponent,
      },
      {
        path: 'cart',
        // canActivate: [StoreFirstGuard],
        component: CartDetail,
      },
      {
        path: 'checkout',
        // canActivate: [StoreFirstGuard],
        component: CheckoutComponent,
      },
      {
        path: 'admin',
        // canActivate: [StoreFirstGuard],
        loadChildren: () =>
          import('./admin/admin.module').then((m) => m.AdminModule),
      },
      //component: AdminComponent
      {
        path: '**', // tracks/subscribes to the BrowserURL state
        redirectTo: '/store', // makes a state change in BrowserUrl state
      },
    ]),
  ],
  providers: [
    StoreFirstGuard,
    {
      provide: HTTP_INTERCEPTORS, // inbuilt dependency
      useClass: MyHttpInterceptorService, // custom dependency
      multi: true,
    },
  ],
  bootstrap: [AppComponent], // launch
})
export class AppModule {} // Root level entities should not interact or support Model level entity
