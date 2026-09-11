https://github.com/ganatram/ecom1

Routing - 'perform navigation' in SPA

1. Hashbang - 'are events that initiate a state change (BrowserURL state).

localhost:3002/cart

2.  RouterTree - Array of route objects

             RouterModule.forRoot([
               {
                 path:"store", // tracks the BrowserURL state
                 component:'StoreComponent'
               },
               {
                 path:"cart", // tracks the BrowserURL state
                 component:'CartDetail'
               },
               ])

3.  RoutingPlaceholder -

                <router-outlet/>

    localhost:3500/products localhost:3500/orders

    rest.datasource.ts rest.datasource.ts

    product.repository.ts - order.repository.ts

    store.component.ts checkout.component.ts

    store.component.html checkout.component.html
