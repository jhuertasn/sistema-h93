import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  //creamos la variable user para capturar los
  //valores
  user:any=null
  
  constructor(private login:LoginService) { }

  //ahora ya podemos invocar a la funcion en nuestro
  //html con user."variable a llamar"
  ngOnInit(): void {
    this.user =  this.login.getuser();
    
  }

}
