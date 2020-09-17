import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { Store } from '@ngrx/store';
import { selectProducts } from 'src/app/store/product.selectors';
import { Update } from '@ngrx/entity';
import { updateProduct, deleteProduct } from 'src/app/store/product.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  product: Product[]
  constructor(private store: Store<Product[]>, private router: Router) { }

  ngOnInit(): void {
    this.store.select(selectProducts).subscribe(p => this.product = p)
  }
  onAddQty(product: Product) {
    this.increment(product)
  }
  onRemoveQty(product: Product) {
    this.decrement(product)    
  }
  onRemoveBtn(product: Product) {
    this.store.dispatch(deleteProduct({ id: product._id }))
    if(this.product.length == 0) {return this.router.navigateByUrl('')}
  }
  increment(product: Product) {
    const updatedProduct: Product = Object.assign({}, product)
    updatedProduct.qty = updatedProduct.qty < 9 ? updatedProduct.qty = updatedProduct.qty + 1 : updatedProduct.qty;
    const update: Update<Product> = {
      id: product._id,
      changes: updatedProduct
    }
    this.store.dispatch(updateProduct({ product: update }))
  }
  decrement(product: Product) {
    const updatedProduct: Product = Object.assign({}, product)
    updatedProduct.qty = updatedProduct.qty > 1 ? updatedProduct.qty = updatedProduct.qty - 1 : updatedProduct.qty;
    const update: Update<Product> = {
      id: product._id,
      changes: updatedProduct
    }
    this.store.dispatch(updateProduct({ product: update }))
  }
}
