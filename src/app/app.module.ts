import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule, JWT_OPTIONS } from "@auth0/angular-jwt";

import { extModules } from './build-specifics';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { LandindComponent } from './components/landind/landind.component';
import { JumbotronComponent } from './components/landind/jumbotron/jumbotron.component';
import { ProductListComponent } from './components/landind/product-list/product-list.component';
import * as fromProduct from './store/product.reducer';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { OrderFormComponent } from './components/checkout/order-form/order-form.component';
import { OrderBillComponent } from './components/checkout/order-bill/order-bill.component';
import { ProductComponent } from './components/product/product.component';
import { WishlistComponent } from './components/checkout/wishlist/wishlist.component';
import { AuthService } from './services/online/auth.service';
import { NgxWebstorageModule } from 'ngx-webstorage';

export function jwtOptionsFactory(authService: AuthService) {
  return {
    tokenGetter: () => {
      return authService.getAsyncToken();
    },
    allowedDomains: ["192.168.0.117:4200"],
    authScheme: "JWT "
  }
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandindComponent,
    JumbotronComponent,
    ProductListComponent,
    CheckoutComponent,
    OrderFormComponent,
    OrderBillComponent,
    ProductComponent,
    WishlistComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    CollapseModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [AuthService]
      }
    }),
    BsDropdownModule.forRoot(),
    NgxWebstorageModule.forRoot(),
    ToastrModule.forRoot({ closeButton: true, preventDuplicates: true }),
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    StoreModule.forFeature(fromProduct.productsFeatureKey, fromProduct.reducer),
    extModules
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
