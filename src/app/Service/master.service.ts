import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject,tap } from 'rxjs';
import { RuleGp } from '../Model/RuleGp';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  apiurl = "http://localhost:8080/rules/gp/view";
  saveURL = "http://localhost:8080/rules/gp/add";


  private _refreshrequired=new Subject<void>();
  get RequiredRefresh(){
    return this._refreshrequired;
  }

  constructor(private http: HttpClient) {

  }
  GetRuleGps(): Observable<RuleGp> {
    return this.http.get<RuleGp>(this.apiurl);
  }
  GetRuleGpById(code:any){
    return this.http.get(this.apiurl+'/'+code);
  }
  Remove(code:any){
    return this.http.delete(this.apiurl+'/'+code);
  }
  Save(inputdata:any){
    return this.http.post(this.saveURL,inputdata).pipe(
      tap(()=>{
this.RequiredRefresh.next();
      })
    );
  }

  /* GetDes(){
    return this.http.get('https://localhost:44308/Designation');
  } */
}
