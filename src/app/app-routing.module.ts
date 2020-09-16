import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandindComponent } from './components/landind/landind.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProductComponent } from './components/product/product.component';
import { CartGuard } from 'src/app/guards/cart.guard';

const routes: Routes = [
  { path: '', component: LandindComponent },
  { path: 'checkout', component: CheckoutComponent, canActivate: [CartGuard] },
  { path: 'product/:id', component: ProductComponent },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
