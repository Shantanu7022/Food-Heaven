import { Component } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent { 
  allpro:any=[]

  delp(did:any){
    if(window.confirm('Are You Sure?')){
    var fd = new FormData()
    fd.append("id",did);

    this.api.delpro(fd).subscribe((data:any)=>{
      
      this.getdata();
      
    })
  }
}

  constructor(private api: ApiService){

  }
  getdata(){
    this.api.selpro().subscribe((data:any)=>{
      this.allpro=data;
    })
  }

  ngOnInit(){
    this.getdata();
   
  }

}
