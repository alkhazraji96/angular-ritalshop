import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { JwtHelperService } from '@auth0/angular-jwt';

// const devUrl = 'http://192.168.0.117:4200'
const URL = '/api/admin/login'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private localStorageService: LocalStorageService,
    public httpClient: HttpClient,
  ) { }
  getAsyncToken() {
    return this.localStorageService.retrieve('Re3rd4jnYHCK6CNN')
  }
  loginUser(user: any) {
    return this.httpClient.post<any>(URL, user)
  }

  getCurrentUser() {
    if (this.getAsyncToken()) {
      const jwtHelper = new JwtHelperService()
      return jwtHelper.decodeToken(this.getAsyncToken()).user
    }
  }
  
  // onSignout() {
  //   this.localStorageService.clear()
  //   this.router.navigateByUrl('')
  // }
}
