import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormRegisterComponent } from './form-register/form-register.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { SharedComponent } from './shared/shared.component';

const routes: Routes = [
  {
    path: '',
    component:FormRegisterComponent
    
  },
  {
    path: 'login',
    component:FormLoginComponent
   
  },
  {
    path: 'shared',
    component:SharedComponent
  },
  {
    path: '**',
    redirectTo:''
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
