import { Component, OnInit, Input } from '@angular/core';
import { cities } from '../../../models/city.model';
import { CityService } from '../../../services/offline/city.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OrderSubmitService } from 'src/app/services/offline/order-submit.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {
  cities: string[] = cities
  selectedCity: string = 'النجف'
  orderForm: FormGroup = this.orderFormFunc()
  constructor(private cityService: CityService, private fb: FormBuilder, private orderSubmitService: OrderSubmitService) { }

  ngOnInit(): void {
    this.orderSubmitService.orderSubmit$.subscribe(() => this.onOrederSubmit())
  }
  onCityClick(city: string) {
    this.selectedCity = city
    this.cityService.setCity(this.selectedCity)
  }
  onOrederSubmit() {
    console.log(this.orderForm.value);
  }
  orderFormFunc(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      tel: ['', [Validators.required, Validators.min(1000000000), Validators.max(9999999999)]],
      address: ['', Validators.required],
      city: [this.selectedCity]
    })
  }
}
