import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/online/auth.service';
import { LocalStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loading: boolean = false
  loginForm: FormGroup = this.loginFormFunc()
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private toastrService: ToastrService,
    private localStorage: LocalStorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  loginFormFunc(): FormGroup {
    return this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  onSubmit() {
    this.loading = true
    this.authService.loginUser(this.loginForm.value).subscribe(r => {
      if (!r.id_token) { this.loading = false; return this.toastrService.error(r.msg, 'فشل تسجيل الدخول') }
      this.localStorage.store('Re3rd4jnYHCK6CNN', r.id_token)
      this.loading = false
      this.toastrService.success('', 'تم تسجيل الدخول بنجاح')
      this.router.navigateByUrl('/')
    })
  }
}
