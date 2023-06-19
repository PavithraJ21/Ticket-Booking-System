import { Component, OnInit } from '@angular/core';
import { DbutilityService } from '../dbutility.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  rpnr:string=""
  rfrom:string=""
  rto:string=""
  rname:string=""
  rnom:number=0
  charge:number=0
  rdate:string=""
  success:boolean=false
  trainDetails:any;
  message:any;
  cs:number=0;
  constructor(private mydb:DbutilityService) { 
    this.mydb.getTrain().subscribe(data=>{
      if(data["message"]){
        this.trainDetails=data["trainList"];
      }
    });
  }

  ngOnInit(): void {
  }
  register(){
   this.mydb.addPass(this.rname,this.rpnr,this.rfrom,this.rto,this.rdate,this.rnom).subscribe(data=>{
     
    
    this.mydb.getCost(this.rpnr).subscribe(data=>{
      this.cs=Number(data);
      this.charge=this.cs*this.rnom;
      this.success=true;
    });});

  }
}

