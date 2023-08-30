import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import {Router} from "@angular/router"
@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent {

  constructor(private router: Router,private api: ApiService){

  }

  cat:any=""

  addcat(val:any){
    var fd = new FormData();
    fd.append("cname",val.name);

    this.api.inscat(fd).subscribe((data:any)=>{
      this.router.navigate(['/list-category'])
    })

  }

}
