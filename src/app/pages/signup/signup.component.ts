import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user ={
    username: '',
    password: '',
    nombuser: '',
    apelliuser: '',
    emailuser: '',
    telefuser: ''

  }

  constructor(private userService:UserService, private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

  formSubmit(){
    console.log(this.user);
    if(this.user.username =='' || this.user.username ==null ){
      this.snack.open('El nombre del usuario es requerido','Aceptar',{
        //duracion del anuncio del alert
        duration: 3000,
        //Posiciones del alter en la pantalla registro
        horizontalPosition:'right',
        verticalPosition:'bottom'
      });
      return;
    }
    this.userService.insertarusuario(this.user).subscribe(
      (data) =>{
        console.log(data);
        Swal.fire('Usuario Registrado','Usuario Guardado Correctamente','success');
      })
    
  }
  
}
