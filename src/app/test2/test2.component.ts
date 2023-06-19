import { Component, OnInit } from '@angular/core';
import { DbutilityService } from '../dbutility.service';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  mailId:string = "";
  pswd:string = "";
  message:string="";
  
  constructor(private mydb:DbutilityService) { }
  insert(){
    this.mydb.insertCustDetails(this.mailId,this.pswd).subscribe(data=>{
      if(data["message"])
      {
        this.message="registered";
      }

    });
  }

  ngOnInit(): void {
  }

}
