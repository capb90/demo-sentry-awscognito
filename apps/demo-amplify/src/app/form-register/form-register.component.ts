import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Auth, API } from 'aws-amplify';
import { from } from 'rxjs';
import * as Sentry from "@sentry/angular";

export interface UserSignUpModel {
  username: string;
  password: string;
  attributes: UserAttributesModel;
  validationData?: any;
}

export interface UserAttributesModel {
  name: string;
  family_name: string;
  email: string;
  nickname: string;
  locale?: string;
  phone_number?: string;
  profile?: string;
  'custom:typedni': string;
  'custom:dni': string;
  'custom:nationality': string;
}

@Component({
  selector: 'amplify-app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css'],
})
export class FormRegisterComponent implements OnInit {
  signupForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    family_name: ['', [Validators.required]],
    tipoIdentificacion: ['', [Validators.required]],
    identificacion: ['', [Validators.required]],
    locale: ['', [Validators.required]],
    telf: ['', [Validators.required]],
    rol: ['', [Validators.required]],
    nickname: ['', [Validators.required]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
   
  }

  submit() {
    if (this.signupForm.valid) {
      const userCgn: UserSignUpModel = {
        username: this.signupForm.get('nickname')?.value,
        password: this.signupForm.get('password')?.value,
        attributes: {
          email: this.signupForm.get('email')?.value,
          name: this.signupForm.get('name')?.value,
          family_name: this.signupForm.get('family_name')?.value,
          nickname: this.signupForm.get('nickname')?.value,
          phone_number: this.signupForm.get('telf')?.value,
          profile: this.signupForm.get('rol')?.value,
          'custom:typedni': this.signupForm.get('tipoIdentificacion')?.value,
          'custom:dni': this.signupForm.get('identificacion')?.value,
          'custom:nationality': this.signupForm.get('locale')?.value,
        },
        // validationData: {
        //   Name: 'email',
        //   Value: `${this.signupForm.get('email')?.value}`,
        // },
      };
      const token = localStorage.getItem('tokenProb')
      const apiName = 'AdminQueries'
      const path = '/addUserToGroup'
      const data = {
        body:{
          username:this.signupForm.get('nickname')?.value,
          groupname:'editors',
        },
        headers: {
          'Content-Type' : 'application/json',
          Authorization: token
        } 
       
      }
      from(API.post(apiName,path,data)).subscribe((response)=>{
        console.log('RESPUESTA',response)
      },(err)=>Sentry.captureException(err))
      // from(Auth.signUp(userCgn)).subscribe((req) =>
      //   console.log('RESPUESTA', req)
      // );


    }
  }
}
