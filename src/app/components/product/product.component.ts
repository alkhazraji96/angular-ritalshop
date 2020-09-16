import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { Store, select } from '@ngrx/store';
import { addProduct, deleteProduct } from 'src/app/store/product.actions';
import { selectProducts } from 'src/app/store/product.selectors';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/online/product.service';

@Component({
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  cartToggle = {};
  product: Product = {} as any

  constructor(
    private store: Store<Product[]>,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productService.getSelectedProduct(this.activatedRoute.snapshot.params.id).subscribe(r => this.product = r)
    this.store.pipe(select(selectProducts)).subscribe(product => {
      this.cartToggle = Object.assign({}, ...(product.map(product => ({ [product._id]: true }))))
    })
  }
  onAddClick() {
    const productWithQty = Object.assign({}, this.product)
    productWithQty.qty = 1;
    this.store.dispatch(addProduct({ product: productWithQty }))
  }
  onRemoveClick() {
    this.store.dispatch(deleteProduct({ id: this.activatedRoute.snapshot.params.id }))
  }
}
