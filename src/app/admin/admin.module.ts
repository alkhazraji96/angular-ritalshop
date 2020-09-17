import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from '../components/admin/admin.component';
import { DashboardComponent } from '../components/admin/dashboard/dashboard.component';
import { ProductAddComponent } from '../components/admin/product-add/product-add.component';
import { ShipmentComponent } from '../components/admin/shipment/shipment.component';
import { ExpenseComponent } from '../components/admin/expense/expense.component';
import { SellComponent } from '../components/admin/sell/sell.component';
import { StatisticalComponent } from '../components/admin/statistical/statistical.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ProfitAddComponent } from '../components/admin/profit-add/profit-add.component';
import { ExpenseStatComponent } from '../components/admin/statistical/expense-stat/expense-stat.component';
import { ProfitStatComponent } from '../components/admin/statistical/profit-stat/profit-stat.component';
import { HomeStatComponent } from '../components/admin/statistical/home-stat/home-stat.component';
import { SellStatComponent } from '../components/admin/statistical/sell-stat/sell-stat.component';
import { ReceiptStatComponent } from '../components/admin/statistical/receipt-stat/receipt-stat.component';
import { ReceiptAddComponent } from '../components/admin/receipt-add/receipt-add.component';
import { LoginComponent } from '../components/admin/login/login.component';

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    ProductAddComponent,
    ShipmentComponent,
    ExpenseComponent,
    SellComponent,
    StatisticalComponent,
    ProfitAddComponent,
    ExpenseStatComponent,
    ProfitStatComponent,
    HomeStatComponent,
    LoginComponent,
    SellStatComponent,
    ReceiptStatComponent,
    ReceiptAddComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    AdminRoutingModule,
    BsDropdownModule.forRoot(),
  ],
})
export class AdminModule { }
