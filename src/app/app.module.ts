import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { NewComponent } from './new/new.component';
//import { TestComponent } from './test/test.component';
import { AddtrainComponent } from './addtrain/addtrain.component';
import { DbutilityService } from './dbutility.service';
import { HttpClientModule } from '@angular/common/http';
import { Test2Component } from './test2/test2.component'; 
//import { DeletetrainComponent } from './deletetrain/deletetrain.component';
import { SignupComponent } from './signup/signup.component';
import { Login2Component } from './login2/login2.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    RegisterComponent,
    NewComponent,
  //  TestComponent,
    Test2Component,
    AddtrainComponent,
   // DeletetrainComponent,
    SignupComponent,
    Login2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DbutilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
