import { Component,NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { ListcategoryComponent } from './listcategory/listcategory.component'
import { AddproductComponent } from './addproduct/addproduct.component';
import { ListproductComponent } from './listproduct/listproduct.component'
import { EditcatComponent } from './editcat/editcat.component';
import { LoginComponent } from './login/login.component';

import { ProtectGuard } from './protect.guard';

const routes: Routes = [
  {path: "", redirectTo:"login", pathMatch:"full"},
  {path: "dashboard", component:DashboardComponent},
  {path: "add-category", component:AddcategoryComponent, canActivate: [ProtectGuard]},
  {path: "list-category", component:ListcategoryComponent, canActivate: [ProtectGuard]},
  {path: "list-product", component:ListproductComponent, canActivate: [ProtectGuard]},
  {path: "add-product", component:AddproductComponent, canActivate: [ProtectGuard]},
  {path: "edit-cat/:id", component:EditcatComponent, canActivate: [ProtectGuard]},
  {path: "login", component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
