import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandindComponent } from './components/landind/landind.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  { path: '', component: LandindComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'product/:id', component: ProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
