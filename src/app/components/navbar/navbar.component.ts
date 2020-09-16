import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductState } from 'src/app/store/product.reducer';
import { selectProducts } from 'src/app/store/product.selectors';
import { NavbarService } from 'src/app/services/offline/navbar.service';
import { ToastrService } from 'ngx-toastr';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  cartLength: number = 0
  adminActive: boolean = false;
  constructor(
    private store: Store<ProductState>,
    private navbarService: NavbarService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.store.select(selectProducts).subscribe(p => this.cartLength = p.length)
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((e: NavigationEnd) => {
      if (e.url.includes('admin')) { return this.adminActive = true }
      this.adminActive = false;
    })
  }
  onSideNavToggle(e: MouseEvent) {
    this.navbarService.setCollapsed(e)
  }
  onCartClick() {
    if (this.cartLength === 0) { return this.toastrService.warning('يرجى اضافة عناصر للعربة') }
    this.router.navigateByUrl('checkout')
  }
}
