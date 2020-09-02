import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { Store, select } from '@ngrx/store';
import { ProductState } from 'src/app/store/product.reducer';
import { selectProducts } from '../../store/product.selectors';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isCollapsed = true;
  cart$: Observable<Product[]>
  
  constructor(private store: Store<ProductState>) { }

  ngOnInit(): void {
    this.cart$ = this.store.pipe(select(selectProducts))
  }
}
