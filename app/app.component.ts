import { Component, OnInit } from '@angular/core';
import { FireauthService } from './shared/fireauth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ecommerce';
  loginForm: FormGroup;
  errorMessage = '';
  registerForm: FormGroup;
  successMessage = '';

  constructor(
    public authService: FireauthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {

  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['', Validators.required]
    });

    this.registerForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['', Validators.required]
    });
  }

  tryFacebookLogin() {
    this.authService.doFacebookLogin()
    .then(res => {
      this.router.navigate(['/courses']);
    });
  }

  tryGoogleLogin() {
    this.authService.doGoogleLogin()
    .then(res => {
      this.router.navigate(['/courses']);
    });
  }

  tryLogin(value) {
    this.authService.doLogin(value)
    .then(res => {
      this.successMessage = 'Welcome!!! You are Logged In';
      this.router.navigate(['/courses']);
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
    });
  }

  tryRegister(value) {
    this.authService.doRegister(value)
    .then(res => {
      console.log(res);
      this.errorMessage = '';
      this.successMessage = 'Your account has been created';
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
      this.successMessage = '';
    });
  }

}
