import { Component } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent {
  allpro:any=[]
  allcat:any=[]


  constructor(private api: ApiService){

  }
  getdata(){
    this.api.selpro().subscribe((data:any)=>{
      this.allpro=data;
    })
  }

  getcdata(){
    this.api.selcat().subscribe((data:any)=>{
      this.allcat=data;
    })
  }

  ngOnInit(){
    this.getdata();
    this.getcdata();
   
  }


}
