import { Component, OnInit } from '@angular/core';
import { DbutilityService } from '../dbutility.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

   message:string="";
  trainDetails:any;

  constructor(private mydb:DbutilityService) { 
    this. mydb.getTrain().subscribe(data=>{
      if(data["message"]){
        this.trainDetails=data["trainList"];
      }
    });
   }

    deleteTrain(trainno:string){
      this.mydb.deleteTr(trainno).subscribe(data=>{
        if(data["message"]){
          this.message="Removed Successfully";
          alert("Deleted Sucessfully!!!")
        }
      });
    }
  
  ngOnInit(): void {
  }
}
