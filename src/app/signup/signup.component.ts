import { Component, OnInit } from '@angular/core';
import { DbutilityService } from '../dbutility.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user:string="";
  password:string="";
  message:string="";
  constructor(private mydb:DbutilityService) { }
  enter(){
    this.mydb.insertCustDetails(this.user,this.password).subscribe(data=>{
      if(data["message"])
      {
        this.message="registered";
        alert("Registered Successfully!!");
      }

    });
  }

  ngOnInit(): void {
  }


}
