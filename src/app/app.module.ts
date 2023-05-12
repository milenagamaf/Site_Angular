import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { ListStudentComponent } from './components/list-student/list-student.component';
import { LoginStudentComponent } from './components/login-student/login-student.component';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { BlogComponent } from './components/blog/blog.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContatoComponent } from './components/contato/contato.component';


@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    EditStudentComponent,
    ListStudentComponent,
    LoginStudentComponent,
    BlogComponent,
    GaleriaComponent,
    SobreComponent,
    HeaderComponent,
    FooterComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
