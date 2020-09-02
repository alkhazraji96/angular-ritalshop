import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product.model';
import { ProductState } from '../../../store/product.reducer';
import { Store } from '@ngrx/store';
import { addProduct, deleteProduct } from 'src/app/store/product.actions';
import { Router } from '@angular/router';
import { selectProducts } from 'src/app/store/product.selectors';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  cartToggle = {};
  productList: Product[] = [
    { id: '1', name: 'اوتي', image: '../../../../assets/unnam3ed.png', price: 12000, description: [{ desc: 'فرن اصلي ضمان سنة' }, { desc: 'فرن اصلي ضمان سنة' }, { desc: 'فرن اصلي ضمان سنة' }, { desc: 'فرن اصلي ضمان سنة' }], qty: 1 },
    { id: '2', name: 'خلاط', image: '../../../../assets/unnam3ed.png', price: 12000, description: [{ desc: 'فرن اصلي ضمان سنة' }, { desc: 'فرن اصلي ضمان سنة' }, { desc: 'فرن اصلي ضمان سنة' }, { desc: 'فرن اصلي ضمان سنة' }], qty: 1 },
    { id: '3', name: 'براد', image: '../../../../assets/unnam3ed.png', price: 12000, description: [{ desc: 'فرن اصلي ضمان سنة' }, { desc: 'فرن اصلي ضمان سنة' }, { desc: 'فرن اصلي ضمان سنة' }, { desc: 'فرن اصلي ضمان سنة' }], qty: 1 },
    { id: '4', name: 'طباخ', image: '../../../../assets/unnam3ed.png', price: 12000, description: [{ desc: 'فرن اصلي ضمان سنة' }, { desc: 'فرن اصلي ضمان سنة' }, { desc: 'فرن اصلي ضمان سنة' }, { desc: 'فرن اصلي ضمان سنة' }], qty: 1 },
    { id: '5', name: 'غسالة', image: '../../../../assets/unnam3ed.png', price: 12000, description: [{ desc: 'فرن اصلي ضمان سنة' }, { desc: 'فرن اصلي ضمان سنة' }, { desc: 'فرن اصلي ضمان سنة' }, { desc: 'فرن اصلي ضمان سنة' }], qty: 1 },
    { id: '6', name: 'مجففة', image: '../../../../assets/unnam3ed.png', price: 12000, description: [{ desc: 'فرن اصلي ضمان سنة' }, { desc: 'فرن اصلي ضمان سنة' }, { desc: 'فرن اصلي ضمان سنة' }, { desc: 'فرن اصلي ضمان سنة' }], qty: 1 },
    { id: '7', name: 'فرن', image: '../../../../assets/unnam3ed.png', price: 12000, description: [{ desc: 'فرن اصلي ضمان سنة' }, { desc: 'فرن اصلي ضمان سنة' }, { desc: 'فرن اصلي ضمان سنة' }, { desc: 'فرن اصلي ضمان سنة' }], qty: 1 },
  ]

  constructor(private store: Store<ProductState>, private router: Router) { }

  ngOnInit(): void {
    this.store.select(selectProducts).subscribe(product => {
      this.cartToggle = Object.assign({}, ...(product.map(product => ({ [product.id]: true }))))
    })
  }
  onAddClick(product: Product) {
    this.store.dispatch(addProduct({ product: product }))
  }
  onRemoveClick(product: Product) {
    this.store.dispatch(deleteProduct({ id: product.id }))
  }
  onImageClick(product: Product) {
    this.router.navigateByUrl('product/' + product.id)
  }

}
