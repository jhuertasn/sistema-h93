import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './pages/home/home.component';
//importar Iconos
import {MatIconModule} from '@angular/material/icon';
import { ListarclientesComponent } from './pages/listarclientes/listarclientes.component';
import { ModuloadministrativoComponent } from './pages/moduloadministrativo/moduloadministrativo.component';
import {MatTableModule} from '@angular/material/table';
import { ModulodirectivoComponent } from './pages/modulodirectivo/modulodirectivo.component';
import { AdminComponent } from './pages/admin/admin.component';
import { BienvenidoComponent } from './pages/admin/bienvenido/bienvenido.component';
import {MatDividerModule} from '@angular/material/divider';
import { SliderbarComponent } from './pages/admin/sliderbar/sliderbar.component';
import {MatListModule} from '@angular/material/list';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import{ProfileComponent}from './pages/profile/profile.component';
import { CategoriaComponent } from './pages/admin/categoria/categoria.component';
import { AgregarCategoriaComponent } from './pages/admin/agregar-categoria/agregar-categoria.component';
import { ExamenComponent } from './pages/admin/examen/examen.component';
import { AgregarExamenComponent } from './pages/admin/agregar-examen/agregar-examen.component';
import { PreguntaComponent } from './pages/admin/pregunta/pregunta.component';
import { AgregarPreguntaComponent } from './pages/admin/agregar-pregunta/agregar-pregunta.component';



//import { ClientesComponent } from './pages/clientes/clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ListarclientesComponent,
    ModuloadministrativoComponent,
    ModulodirectivoComponent,
    AdminComponent,
    BienvenidoComponent,
    SliderbarComponent,
    DashboardComponent,
    ProfileComponent,
    CategoriaComponent,
    AgregarCategoriaComponent,
    ExamenComponent,
    AgregarExamenComponent,
    PreguntaComponent,
    AgregarPreguntaComponent,
    //ClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //Importando Material de Angular para los Formularios
    MatFormFieldModule,
    //importal estilo de botones
    MatButtonModule,
    //importan diseño amigable a los imputs
    MatInputModule,
    MatSnackBarModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatDividerModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
