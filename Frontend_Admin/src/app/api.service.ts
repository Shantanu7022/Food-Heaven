import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http:HttpClient) {}

  inscat(fd:any){
    return this.http.post("http://localhost:2000/cat/add",fd);
  }

  selcat(){
    return this.http.get("http://localhost:2000/cat/sel");
  }
  selpro(){
    return this.http.get("http://localhost:2000/pro/sel");
  }

  delcat(fd:any){
    return this.http.post("http://localhost:2000/cat/del",fd);
  }
  delpro(fd:any){
    return this.http.post("http://localhost:2000/pro/del",fd);
  }
  geteditcat(fd:any){
    return this.http.post("http://localhost:2000/cat/edit",fd);
  }
  inspro(fd:any){
    return this.http.post("http://localhost:2000/pro/add",fd);
  }
  updcat(fd:any){
    return this.http.post("http://localhost:2000/cat/upd",fd);
  }
  login(fd:any){
    return this.http.post("http://localhost:2000/auth/login",fd);
  }
}
