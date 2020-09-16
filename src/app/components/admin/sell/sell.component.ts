import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/online/admin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss']
})
export class SellComponent implements OnInit {
  products: Observable<Product[]>
  type: string = ''
  loading: boolean = false
  sellForm: FormGroup = this.sellFormFunc()
  constructor(
    private adminService: AdminService,
    private fb: FormBuilder,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.products = this.adminService.getAllProducts()
  }
  sellFormFunc(): FormGroup {
    return this.fb.group({
      qty: ['', Validators.required],
      price: ['', Validators.required],
      typeId: ['', Validators.required]
    })
  }
  onTypeClick(id: string) {
    this.sellForm.get('typeId').setValue(id)
  }
  onSubmit() {
    this.adminService.postSell(this.sellForm.value).subscribe(r => {
      if (!r.success) { this.toastrService.error('', 'فشل اضافة بيع') }
      this.toastrService.success('', 'تم اضافة بيع')
    })
  }
}
