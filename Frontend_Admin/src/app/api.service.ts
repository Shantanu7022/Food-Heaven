import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http:HttpClient) {}

  inscat(fd:any){
    return this.http.post("https://food-heaven-server.onrender.com/cat/add",fd);
  }

  selcat(){
    return this.http.get("https://food-heaven-server.onrender.com/cat/sel");
  }
  selpro(){
    return this.http.get("https://food-heaven-server.onrender.com/pro/sel");
  }

  delcat(fd:any){
    return this.http.post("https://food-heaven-server.onrender.com/cat/del",fd);
  }
  delpro(fd:any){
    return this.http.post("https://food-heaven-server.onrender.com/pro/del",fd);
  }
  geteditcat(fd:any){
    return this.http.post("https://food-heaven-server.onrender.com/cat/edit",fd);
  }
  inspro(fd:any){
    return this.http.post("https://food-heaven-server.onrender.com/pro/add",fd);
  }
  updcat(fd:any){
    return this.http.post("https://food-heaven-server.onrender.com/cat/upd",fd);
  }
  login(fd:any){
    return this.http.post("https://food-heaven-server.onrender.com/auth/login",fd);
  }
}
