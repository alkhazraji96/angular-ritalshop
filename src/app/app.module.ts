import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

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
import { environment } from '../environments/environment';
import { WishlistComponent } from './components/checkout/wishlist/wishlist.component';

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
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot({ closeButton: true }),
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    StoreModule.forFeature(fromProduct.productsFeatureKey, fromProduct.reducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
