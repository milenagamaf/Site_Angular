import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { ListStudentComponent } from './components/list-student/list-student.component';
import { LoginStudentComponent } from './components/login-student/login-student.component';
import { BlogComponent } from './components/blog/blog.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { ContatoComponent } from './components/contato/contato.component';



const routes: Routes = [
  {
    path: 'add',
    component: AddStudentComponent
  },

  {
    path: 'edit/:id',
    component: EditStudentComponent
  },

  {
    path: 'list',
    component: ListStudentComponent
  },

  {
    path: 'login',
    component: LoginStudentComponent
  },

  {
    path: 'blog',
    component: BlogComponent
  },

  {
    path: 'galeria',
    component: GaleriaComponent
  },
  {
    path: 'sobre',
    component: SobreComponent
  },

  {
    path: 'contato',
    component: ContatoComponent
  },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
