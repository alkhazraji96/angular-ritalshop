import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { Store, select } from '@ngrx/store';
import { addProduct, deleteProduct } from 'src/app/store/product.actions';
import { selectProducts } from 'src/app/store/product.selectors';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  cartToggle = {};
  productList: Product =
    { id: this.activatedRoute.snapshot.params.id, name: 'اوتي', image: '../assets/unnam3ed.png', price: 12000, description: [{ desc: 'فرن اصلي ضمان سنة' }, { desc: 'فرن اصلي ضمان سنة' }, { desc: 'فرن اصلي ضمان سنة' }, { desc: 'فرن اصلي ضمان سنة' }], qty: 1 }


  constructor(private store: Store<Product[]>, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.store.pipe(select(selectProducts)).subscribe(product => {
      this.cartToggle = Object.assign({}, ...(product.map(product => ({ [product.id]: true }))))
    })
  }
  onAddClick() {
    this.store.dispatch(addProduct({ product: this.productList }))
  }
  onRemoveClick() {
    this.store.dispatch(deleteProduct({ id: this.activatedRoute.snapshot.params.id }))
  }
}
