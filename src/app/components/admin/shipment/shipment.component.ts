import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/online/admin.service';

@Component({
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.scss']
})
export class ShipmentComponent implements OnInit {
  products: Observable<Product[]>
  type: string = ''
  loading: boolean = false
  shipmentForm: FormGroup = this.shipmentFormFunc()
  constructor(
    private adminService: AdminService,
    private fb: FormBuilder,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.products = this.adminService.getAllProducts()
  }
  shipmentFormFunc(): FormGroup {
    return this.fb.group({
      qty: ['', Validators.required],
      price: ['', Validators.required],
      typeId: ['', Validators.required]
    })
  }
  onTypeClick(id: string) {
    this.shipmentForm.get('typeId').setValue(id)
  }
  onSubmit() {
    this.loading = true;
    this.adminService.postShipment(this.shipmentForm.value).subscribe(r => {
      if (!r.success) { this.loading = false; return this.toastrService.error('', 'فشل اضافة شحنة') }
      this.loading = false;
      this.toastrService.success('', 'تم اضافة شحنة')
    })
  }

}
