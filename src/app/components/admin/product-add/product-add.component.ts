import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  addProductForm: FormGroup = this.addProductFormFunc()
  constructor(private fb: FormBuilder) { }

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

}
