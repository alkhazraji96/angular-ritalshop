import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectProducts } from 'src/app/store/product.selectors';
import { Update } from '@ngrx/entity';
import { updateProduct, deleteProduct } from 'src/app/store/product.actions';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  product$: Observable<Product[]>
  constructor(private store: Store<Product[]>) { }

  ngOnInit(): void {
    this.product$ = this.store.select(selectProducts)
  }
  onAddQty(product: Product) {
    this.increment(product)
  }
  onRemoveQty(product: Product) {
    this.decrement(product)
  }
  onRemoveBtn(product: Product) {
    this.store.dispatch(deleteProduct({ id: product.id }))
  }
  increment(product: Product) {
    const updatedProduct: Product = Object.assign({}, product)
    updatedProduct.qty = updatedProduct.qty < 9 ? updatedProduct.qty = updatedProduct.qty + 1 : updatedProduct.qty;
    const update: Update<Product> = {
      id: product.id,
      changes: updatedProduct
    }
    this.store.dispatch(updateProduct({ product: update }))
  }
  decrement(product: Product) {
    const updatedProduct: Product = Object.assign({}, product)
    updatedProduct.qty = updatedProduct.qty > 1 ? updatedProduct.qty = updatedProduct.qty - 1 : updatedProduct.qty;
    const update: Update<Product> = {
      id: product.id,
      changes: updatedProduct
    }
    this.store.dispatch(updateProduct({ product: update }))
  }
}
