//Importamos las rutas de las paginas del Proyecto
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import {LoginComponent} from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import {ListarclientesComponent} from './pages/listarclientes/listarclientes.component';
import {ModuloadministrativoComponent} from './pages/moduloadministrativo/moduloadministrativo.component';
import { ModulodirectivoComponent } from './pages/modulodirectivo/modulodirectivo.component';
import { BienvenidoComponent } from './pages/admin/bienvenido/bienvenido.component';
import { SliderbarComponent } from './pages/admin/sliderbar/sliderbar.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import {ProfileComponent} from './pages/profile/profile.component';
import { CategoriaComponent } from './pages/admin/categoria/categoria.component';
import { AgregarCategoriaComponent } from './pages/admin/agregar-categoria/agregar-categoria.component';
import { ExamenComponent } from './pages/admin/examen/examen.component';
import { AgregarExamenComponent } from './pages/admin/agregar-examen/agregar-examen.component';
import { PreguntaComponent } from './pages/admin/pregunta/pregunta.component';
import { AgregarPreguntaComponent } from './pages/admin/agregar-pregunta/agregar-pregunta.component';
import {SliderbarAlumnoComponent} from './pages/listarclientes/sliderbar-alumno/sliderbar-alumno.component';
import { PreguntasComponent } from './pages/listarclientes/preguntas/preguntas.component';
import { RespuestasComponent } from './pages/listarclientes/respuestas/respuestas.component';

const routes: Routes = [
  //Rutas del Proyecto
  {path: '', component:HomeComponent,pathMatch:'full'},
  {path: 'login', component:LoginComponent,pathMatch:'full'},
  {path: 'signup', component:SignupComponent,pathMatch:'full'},
  {path: 'listarClientes', component:ListarclientesComponent,
  children: [
  {
    path:'sliderbar-alumno',component: SliderbarAlumnoComponent,
  },
  {
    path: 'profile', component:ProfileComponent,
  },
  {
    path: 'preguntas', component:PreguntasComponent,
  },  
  {
    path: 'respuestas', component:RespuestasComponent,
  }
]},
  {path: 'moduloAdmin', component:ModuloadministrativoComponent,pathMatch:'full'},
  {path: 'moduloDir', component:ModulodirectivoComponent,pathMatch:'full'},
  

  //{path:'bienvenidoAdmin', component:BienvenidoComponent, pathMatch: 'full'},
  //{path: 'sliderbar', component:SliderbarComponent,pathMatch:'full'},

  {path:'admin',component: DashboardComponent,
    children: [{
      //se cargara de manera automatica bienvenido.component
      path:'',component: BienvenidoComponent,
    },
    {
      path:'sliderbar',component: SliderbarComponent,
    },
    {
      path:'categoria-view',component: CategoriaComponent,
    },
    {
      path:'categoria-add',component: AgregarCategoriaComponent,
    }
    ,
    {
      path:'examen-view',component: ExamenComponent,
    }
    ,
    {
      path:'examen-add',component: AgregarExamenComponent,
    },
    {
      path:'pregunta-view/:examenId/:titulo',component: PreguntaComponent,
    },
    {
      path:'pregunta-add/:examenId/:titulo',component: AgregarPreguntaComponent,
    },
    {
      path: 'profile', component:ProfileComponent,
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
