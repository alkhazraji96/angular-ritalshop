import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductState } from 'src/app/store/product.reducer';
import { Store } from '@ngrx/store';
import { addProduct, deleteProduct } from 'src/app/store/product.actions';
import { Router } from '@angular/router';
import { selectProducts } from 'src/app/store/product.selectors';
import { ProductService } from 'src/app/services/online/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  cartToggle = {};
  productList: Product[] = [];
  totalPages: number = 0;
  hasNextPage: boolean = false;
  hasPrevPage: boolean = false;
  page: number = 1

  constructor(
    private store: Store<ProductState>,
    private router: Router,
    private productService: ProductService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.productService.getProducts(1).subscribe(r => {
      this.totalPages = r.totalPages;
      this.productList = r.docs;
      this.hasNextPage = r.hasNextPage
      this.hasPrevPage = r.hasPrevPage
      this.page = r.page
    })
    this.store.select(selectProducts).subscribe(product => {
      this.cartToggle = Object.assign({}, ...(product.map(product => ({ [product._id]: true }))))
    })
  }
  onAddClick(product: Product) {
    const productWithQty = Object.assign({}, product)
    productWithQty.qty = 1;
    this.store.dispatch(addProduct({ product: productWithQty }))
    this.toastrService.success('', 'تم اضافة عنصر للعربة')
  }
  onRemoveClick(product: Product) {
    this.store.dispatch(deleteProduct({ id: product._id }))
    this.toastrService.warning('', 'تم ازالة عنصر من العربة')
  }
  onImageClick(product: Product) {
    this.router.navigateByUrl('product/' + product._id)
  }
  onPageChanged(i: number) {
    this.productService.getProducts(i).subscribe(r => {
      this.totalPages = r.totalPages;
      this.productList = r.docs;
      this.hasNextPage = r.hasNextPage
      this.hasPrevPage = r.hasPrevPage
      this.page = r.page
    })
  }

}
