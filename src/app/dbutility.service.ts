import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DbutilityService {

  constructor(private http: HttpClient ){ }
  insertCustDetails(user:string,password:string):Observable<any>
{
  return this.http.get("http://localhost:5000/ins?t1="+user+"&t2="+password+"");
}
addtrainDetails(rname:string,rno:string,rsrc:string,rdes:string,rco:string):Observable<any>{
  return this.http.get("http://localhost:5000/instrain?t1="+rname+"&t2="+rno+"&t3="+rsrc+"&t4="+rdes+"&t5="+rco+"");
}
getTrain():Observable<any>{
  return this.http.get("http://localhost:5000/display");
}
deleteTr(trainNo:string):Observable<any>{
  return this.http.get("http://localhost:5000/del?t2="+trainNo+"");
}
loginUser(user:string,paswd:string):Observable<any>{
  return this.http.get("http://localhost:5000/verify?t1="+user+"&t2="+paswd+"");
}
addPass(rname:string,rpnr:string,rfrom:string,rto:string,rdate:string,rnom:number){
 return this.http.get("http://localhost:5000/addPassenger?t1"+rname+"&t2="+rpnr+"&t3"+rfrom+"&t4"+rto+"&t5"+rdate+"&t6"+rnom+"");
}
getCost(rpnr:string){
  return this.http.get("http://localhost:5000/getCost?&t2="+rpnr+"");
 }
}
