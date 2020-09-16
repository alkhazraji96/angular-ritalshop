import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Product } from '../models/product.model';
import { selectProducts } from '../store/product.selectors';

@Injectable({
  providedIn: 'root'
})
export class CartGuard implements CanActivate {
  length: number = 0;
  constructor(private store: Store<Product[]>, private router: Router) {
    this.store.select(selectProducts).subscribe(s => this.length = s.length)
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.length == 0) { return this.router.navigateByUrl('') }
    return true;
  }

}
