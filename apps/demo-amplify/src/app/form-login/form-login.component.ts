import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Auth, API } from 'aws-amplify';
import { from } from 'rxjs';

@Component({
  selector: 'amplify-app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css'],
})
export class FormLoginComponent implements OnInit {
  loginform: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  submit() {
    if (this.loginform.valid) {
      const userCgn = {
        username: this.loginform.get('username')?.value,
        password: this.loginform.get('password')?.value,
      };

      from(Auth.signIn(userCgn.username, userCgn.password)).subscribe((req) => {
        console.log('LOGIN', req);
        localStorage.setItem(
          'tokenProb',
          req.signInUserSession.accessToken.jwtToken
        );
      });
    }
  }
}
