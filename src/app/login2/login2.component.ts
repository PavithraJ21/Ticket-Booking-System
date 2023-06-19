import { Component, OnInit } from '@angular/core';
import { DbutilityService } from '../dbutility.service';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {
  user:string="";
  paswd:string="";
  message:String="";
  allow:boolean=false;
  show:boolean=true;
  imgsrc:string="";
  constructor(private mydb:DbutilityService) { }

  ngOnInit(): void {
  }
  toadmin(){
    this.show=false;
  }
   login(){
     this.mydb.loginUser(this.user,this.paswd).subscribe(data=>{
       if(data["message"])
       {
         this.message="Successfully logined";

        alert("Login successfully");
        this.allow=true
         
       }
       else{
         alert("Enter the valid Username!!");
     
       }
     });
   }
}
