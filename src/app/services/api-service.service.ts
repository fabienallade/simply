import { Injectable } from '@angular/core';
import {Headers, Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:Http) { }
  store(data:any){
    const headers=new Headers({
      "Content-Type":"application/json",
    })
    return this.http.post("http://localhost:5000/api/users",data,{headers:headers});
  }
}
