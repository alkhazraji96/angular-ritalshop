import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/online/admin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: './receipt-add.component.html',
  styleUrls: ['./receipt-add.component.scss']
})
export class ReceiptAddComponent implements OnInit {
  loading: boolean = false
  receiptForm: FormGroup = this.receiptFormFunc()
  constructor(
    private adminService: AdminService,
    private fb: FormBuilder,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
  }
  receiptFormFunc(): FormGroup {
    return this.fb.group({
      receipt: ['', Validators.required],
      price: ['', Validators.required]
    })
  }
  onSubmit() {
    this.loading = true;
    this.adminService.postReceipt(this.receiptForm.value).subscribe(r => {
      if (!r.success) { this.loading = false; return this.toastrService.error('', 'فشل اضافة قائمة') }
      this.loading = false;
      this.toastrService.success('', 'تم اضافة قائمة')
    })
  }
}
