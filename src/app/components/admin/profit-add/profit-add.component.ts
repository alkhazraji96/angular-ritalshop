import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/online/admin.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: './profit-add.component.html',
  styleUrls: ['./profit-add.component.scss']
})
export class ProfitAddComponent implements OnInit {
  loading: boolean = false
  profitForm: FormGroup = this.profitFormFunc()
  constructor(
    private adminService: AdminService,
    private fb: FormBuilder,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
  }
  profitFormFunc(): FormGroup {
    return this.fb.group({
      details: ['', Validators.required],
      qty: ['', Validators.required],
      price: ['', Validators.required]
    })
  }
  onSubmit() {
    this.loading = true;
    this.adminService.postProfit(this.profitForm.value).subscribe(r => {
      if (!r.success) { this.loading = false; return this.toastrService.error('', 'فشل اضافة ارباح') }
      this.loading = false;
      this.toastrService.success('', 'تم اضافة ارباح')
    })
  }

}
