import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http:HttpClient) {}

  selpro(){
    return this.http.get("http://localhost:2000/pro/sel");
  }

  selcat(){
    return this.http.get("http://localhost:2000/cat/sel");
  }

}
