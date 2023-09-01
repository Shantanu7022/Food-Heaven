import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';



@Injectable({
   providedIn: 'root'
})
export class ExpenseGuard implements CanActivate {

   constructor( private router: Router) {}

   canActivate(
   next: ActivatedRouteSnapshot,
   state: RouterStateSnapshot): boolean | UrlTree {
      let url: string = state.url;

      var tk=localStorage.getItem("token");
      if(tk!=null){
        return true;
      }else{
        return false;
      }
         
      }

}