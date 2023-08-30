import { NgModule } from '@angular/core';
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

const routes: Routes = [
  {path: "", component:DashboardComponent},
  {path: "header", component:HeaderComponent},
  {path: "sidebar", component:SidebarComponent},
  {path: "footer", component:FooterComponent},
  {path: "add-category", component:AddcategoryComponent},
  {path: "list-category", component:ListcategoryComponent},
  {path: "list-product", component:ListproductComponent},
  {path: "add-product", component:AddproductComponent},
  {path: "edit-cat/:id", component:EditcatComponent},
  {path: "login", component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
