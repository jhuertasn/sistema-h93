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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
