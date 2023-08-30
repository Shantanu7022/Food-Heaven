import { Component,OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-listcategory',
  templateUrl: './listcategory.component.html',
  styleUrls: ['./listcategory.component.css']
})
export class ListcategoryComponent {

  allcat:any=[]

  delc(did:any){
    if(window.confirm('Are You Sure?')){
    var fd = new FormData()
    fd.append("id",did);

    this.api.delcat(fd).subscribe((data:any)=>{
      console.log(data);
      this.getdata();
      
    })
  }
}

  constructor(private api: ApiService){

  }
  getdata(){
    this.api.selcat().subscribe((data:any)=>{
      this.allcat=data;
    })
  }

  ngOnInit(){
    this.getdata();
   
  }


}
