//Importamos las rutas de las paginas del Proyecto
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import {LoginComponent} from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import {ListarclientesComponent} from './pages/listarclientes/listarclientes.component';
import {ModuloadministrativoComponent} from './pages/moduloadministrativo/moduloadministrativo.component';
import { ModulodirectivoComponent } from './pages/modulodirectivo/modulodirectivo.component';

const routes: Routes = [
  //Rutas del Proyecto
  {path: '', component:HomeComponent,pathMatch:'full'},
  {path: 'login', component:LoginComponent,pathMatch:'full'},
  {path: 'signup', component:SignupComponent,pathMatch:'full'},
  {path: 'listarClientes', component:ListarclientesComponent,pathMatch:'full'},
  {path: 'moduloAdmin', component:ModuloadministrativoComponent,pathMatch:'full'},
  {path: 'moduloDir', component:ModulodirectivoComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
