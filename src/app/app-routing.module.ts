import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtrainComponent } from './addtrain/addtrain.component';
import { Login2Component } from './login2/login2.component';
import { NewComponent } from './new/new.component';
import { SignupComponent } from './signup/signup.component';
import { RegisterComponent } from './register/register.component';

import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'',redirectTo:'login2',pathMatch:'full'},
  {path:'login2',component:Login2Component},
  {path:'signup',component:SignupComponent},
  {path:'admin',component:NewComponent},
  {path:'addtrain',component:AddtrainComponent},
  {path:'register',component:RegisterComponent},
  {path:'adminLogin',component:LoginComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
