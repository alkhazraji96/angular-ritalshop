import { Component, OnInit } from '@angular/core';
import { cities } from 'src/app/models/city.model';
import { CityService } from 'src/app/services/offline/city.service';
import { ProductService } from 'src/app/services/online/product.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OrderSubmitService } from 'src/app/services/offline/order-submit.service';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/models/product.model';
import { ToastrService } from 'ngx-toastr';
import { selectProducts } from 'src/app/store/product.selectors';
import { Router } from '@angular/router';
import { clearProducts } from 'src/app/store/product.actions';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {
  cities: string[] = cities
  selectedCity: string = 'النجف'
  orderForm: FormGroup = this.orderFormFunc()
  cartProduct: Product[] = []
  constructor(
    private cityService: CityService,
    private fb: FormBuilder,
    private orderSubmitService: OrderSubmitService,
    private orderService: ProductService,
    private store: Store<Product[]>,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.orderSubmitService.orderSubmit$.subscribe(() => this.onOrederSubmit())
    this.store.select(selectProducts).subscribe(p => this.cartProduct = p)
  }
  onCityClick(city: string) {
    this.selectedCity = city
    this.cityService.setCity(this.selectedCity)
  }
  onOrederSubmit() {
    if (this.orderForm.invalid) { return this.toastrService.warning('يرجى كتابة المعلومات بدقة', 'فشل ارسال الطلب') }
    const order = { form: this.orderForm.value, cart: this.cartProduct }
    this.orderService.postOrder(order).subscribe(r => {
      if (r.success) {
        this.toastrService.success('', 'تم ارسال الطلب');
        this.store.dispatch(clearProducts())
        return this.router.navigateByUrl('')
      }
    })
  }
  orderFormFunc(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      tel: ['', [Validators.required, Validators.min(1000000000), Validators.max(9999999999)]],
      address: ['', Validators.required],
      city: [this.selectedCity],
    })
  }
}
