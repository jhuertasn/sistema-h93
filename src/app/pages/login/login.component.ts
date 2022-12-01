import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //construllendo la estructura de nuestro Usuario
  
  constructor(private snack:MatSnackBar, private logService:LoginService, public router:Router) { }

   public datalogin ={
    //tiene que ser igual a lo que tenemos en el token
    username : '',
    password : ''
  }
  
  ngOnInit(): void {
  }

  formSubmit(){
    if(this.datalogin.username.trim() =="" || this.datalogin.username.trim() == null){
      this.snack.open(" Debe Ingresar un Usuario", 'Aceptar', {duration: 3000});
      return;
    }

    if(this.datalogin.password.trim() =="" || this.datalogin.password.trim() == null){
      this.snack.open(" Debe Ingresar una Contraseña", 'Aceptar', {duration: 3000});
      return;
    }

    //al ejecutar el generartoken se guardara en data
    this.logService.generartoken(this.datalogin).subscribe(
      (data:any)=>{
          console.log(data);
          //creando el servicio componente del login
          this.logService.loginuser(data.token);
          this.logService.getCurrentUser().subscribe((user:any)=>{
            this.logService.setuser(user);
            console.log(user);
            
            //creando la funcion para el cambio de vistas si el usuario 
            // es admin o cliente
            if(this.logService.getUserRol()== 'administrador'){
              this.router.navigate(["/admin"]);
              //esta linea nos dice si estamos conectados o no dependiendo
              //del rol sera indistinto
              this.logService.loginStatusSubject.next(true);
            }else if (this.logService.getUserRol() == 'Directivo'){
              this.router.navigate(["/moduloDir"]); 
              this.logService.loginStatusSubject.next(true);
            }else if (this.logService.getUserRol() == 'Cliente'){
              this.router.navigate(["/listarClientes"]);
              this.logService.loginStatusSubject.next(true);
            }

          })
      }
    )

  }

}
