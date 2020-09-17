import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { AdminService } from 'src/app/services/online/admin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  selectedFile: File = null;
  loading: boolean = false;
  addProductForm: FormGroup = this.addProductFormFunc()
  constructor(
    private fb: FormBuilder,
    private adminService: AdminService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
  }

  get p() { return (this.addProductForm.controls.description as FormArray) }

  addProductFormFunc(): FormGroup {
    return this.fb.group({
      type: ['', Validators.required],
      client_price: ['', Validators.required],
      description: this.fb.array([this.addDescriptionFormFunc()])
    })
  }

  addDescBtn() {
    this.p.push(this.addDescriptionFormFunc())
  }
  removeDescBtn(i: number) {
    (this.addProductForm.get('description') as FormArray).removeAt(i)
  }
  addDescriptionFormFunc(): FormGroup {
    return this.fb.group({
      desc: ['', Validators.required]
    })
  }
  onFileChange(e) {
    this.selectedFile = e.target.files[0]
  }
  onSubmit() {
    this.loading = true;
    if (!this.selectedFile) { return this.loading = false; }
    const formData = new FormData()
    formData.append('imageId', this.selectedFile, this.selectedFile.name)
    formData.append('product', JSON.stringify(this.addProductForm.value))
    this.adminService.postProduct(formData).subscribe(r => {
      if (!r.success) { this.loading = false; return this.toastrService.error(r.msg, 'فشل') }
      this.loading = false;
      this.toastrService.success('', 'تم اضافة منتج')
    })
  }

}
