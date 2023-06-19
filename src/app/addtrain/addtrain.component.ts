import { Component, OnInit } from '@angular/core';
import { DbutilityService } from '../dbutility.service';

@Component({
  selector: 'app-addtrain',
  templateUrl: './addtrain.component.html',
  styleUrls: ['./addtrain.component.css']
})
export class AddtrainComponent implements OnInit {
  rname:string="";
  rno:string="";
  rsrc:string="";
  rdes:string="";
  rco:string="";
  message:string="";
  constructor(private mydb:DbutilityService) { }
  add(){
    this.mydb.addtrainDetails(this.rname,this.rno,this.rsrc,this.rdes,this.rco).subscribe(data=>{
      if(data["message"]){
        this.message="Added Successfully";
      }
      else{
        this.message="Not added";
      }
    });
   }
  ngOnInit(): void {
  }
 

}


