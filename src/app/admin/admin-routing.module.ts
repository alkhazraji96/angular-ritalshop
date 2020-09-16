import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from '../components/admin/admin.component';
import { DashboardComponent } from '../components/admin/dashboard/dashboard.component';
import { ProductAddComponent } from '../components/admin/product-add/product-add.component';
import { ShipmentComponent } from '../components/admin/shipment/shipment.component';
import { SellComponent } from '../components/admin/sell/sell.component';
import { ExpenseComponent } from '../components/admin/expense/expense.component';
import { StatisticalComponent } from '../components/admin/statistical/statistical.component';
import { ProfitAddComponent } from '../components/admin/profit-add/profit-add.component';
import { ExpenseStatComponent } from '../components/admin/statistical/expense-stat/expense-stat.component';
import { ProfitStatComponent } from '../components/admin/statistical/profit-stat/profit-stat.component';
import { HomeStatComponent } from '../components/admin/statistical/home-stat/home-stat.component';
import { SellStatComponent } from '../components/admin/statistical/sell-stat/sell-stat.component';
import { ReceiptStatComponent } from '../components/admin/statistical/receipt-stat/receipt-stat.component';
import { ReceiptAddComponent } from '../components/admin/receipt-add/receipt-add.component';
import { LoginComponent } from '../components/admin/login/login.component';

const routes: Routes = [{
  path: '', component: AdminComponent, children: [
    { path: '', redirectTo: 'dashboard' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'add-product', component: ProductAddComponent },
    { path: 'add-shipment', component: ShipmentComponent },
    { path: 'add-sell', component: SellComponent },
    { path: 'profit', component: ProfitAddComponent },
    { path: 'login', component: LoginComponent },
    { path: 'add-expense', component: ExpenseComponent },
    { path: 'add-receipt', component: ReceiptAddComponent },
    {
      path: 'statistical', component: StatisticalComponent, children: [
        { path: '', redirectTo: 'home-stat' },
        { path: 'expense-stat', component: ExpenseStatComponent },
        { path: 'profit-stat', component: ProfitStatComponent },
        { path: 'sell-stat', component: SellStatComponent },
        { path: 'home-stat', component: HomeStatComponent },
        { path: 'receipt-stat', component: ReceiptStatComponent },
      ]
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
