import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { ApiService } from './api.service';

import {HttpClientModule} from '@angular/common/http';
import { ListcategoryComponent } from './listcategory/listcategory.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ListproductComponent } from './listproduct/listproduct.component'
import { CKEditorModule } from 'ckeditor4-angular';
import { EditcatComponent } from './editcat/editcat.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    AddcategoryComponent,
    ListcategoryComponent,
    AddproductComponent,
    ListproductComponent,
    EditcatComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CKEditorModule,
    
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
