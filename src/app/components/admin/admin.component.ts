import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/offline/navbar.service';

@Component({
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  isCollapsed: boolean = false
  constructor(private navbarService: NavbarService) { }
  
  ngOnInit(): void {
    this.navbarService.isCollapsed$.subscribe(() => this.isCollapsed = !this.isCollapsed)
  }
}
