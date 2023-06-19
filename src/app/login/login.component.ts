import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DbutilityService } from '../dbutility.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private mydb:DbutilityService) { }
  mailId:string="";
  paswd:string="";
  ans:string="";
  message:string="";
  nextClient:boolean=false;
  allow:boolean=false;
  user:string=""
  password:string=""

  insert(){
    this.mydb.insertCustDetails(this.mailId,this.paswd).subscribe(data=>{
      if(data["message"])
      {
        this.message="registered"
        this.nextClient=true;
        alert("Registered");
      }
//      else{
  //      this.message="invalid username or password";
   //     this.nextnextClicked=false;
    //  }
    });
  }
  verifyAdmin(){
    if((this.user=="admin")&&(this.password=="admin1")){
      alert("Verified Successfully");
      this.allow=true;
    }
  }
  ngOnInit(): void {
  }
  verify(){
    if((this.mailId=="pavigmail") && (this.paswd=="pavi")){
      this.ans="VERIFIRD" 
    }
    else{
      this.ans="NULL"
      this.mailId=""
      this.paswd=""
    }
  }

}
