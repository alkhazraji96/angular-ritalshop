import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { Store, select } from '@ngrx/store';
import { addProduct, deleteProduct } from 'src/app/store/product.actions';
import { selectProducts } from 'src/app/store/product.selectors';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/online/product.service';
import { ToastrService } from 'ngx-toastr';

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
    private productService: ProductService,
    private router: Router,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.productService.getSelectedProduct(this.activatedRoute.snapshot.params.id).subscribe(r => {
      if (r.err) { return this.router.navigateByUrl('') }
      this.product = r
    })
    this.store.pipe(select(selectProducts)).subscribe(product => {
      this.cartToggle = Object.assign({}, ...(product.map(product => ({ [product._id]: true }))))
    })
  }
  onAddClick() {
    const productWithQty = Object.assign({}, this.product)
    productWithQty.qty = 1;
    this.store.dispatch(addProduct({ product: productWithQty }))
    this.toastrService.success('', 'تم اضافة عنصر للعربة')
  }
  onRemoveClick() {
    this.store.dispatch(deleteProduct({ id: this.activatedRoute.snapshot.params.id }))
    this.toastrService.warning('', 'تم ازالة عنصر من العربة')
  }
}
