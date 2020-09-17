import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/online/admin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent implements OnInit {

  loading: boolean = false
  expenseForm: FormGroup = this.expenseFormFunc()

  constructor(
    private adminService: AdminService,
    private fb: FormBuilder,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
  }
  expenseFormFunc(): FormGroup {
    return this.fb.group({
      details: ['', Validators.required],
      price: ['', Validators.required]
    })
  }
  onSubmit() {
    this.loading = true;
    this.adminService.postExpense(this.expenseForm.value).subscribe(r => {
      if (!r.success) { this.loading = false; return this.toastrService.error('', 'فشل اضافة مصاريف') }
      this.loading = false;
      this.toastrService.success('', 'تم اضافة مصاريف')
    })
  }

}
