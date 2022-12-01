import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isloginEst=false;
  user:any=null;

  //heredando los metodos de LoginService
  constructor(private login:LoginService) { }
  
  ngOnInit(): void {
    //se instancia la sesion con isloggin
    this.isloginEst = this.login.isloggin();
    this.user = this.login.getuser();
    console.log(this.isloginEst);
    console.log(this.user);
    this.login.loginStatusSubject.asObservable().subscribe(data =>{
      this.isloginEst = this.login.isloggin();
      this.user = this.login.getuser();
      console.log(this.isloginEst);
    })
  }
  //creamos la funcion de logout
  public logout(){
    this.login.logout();
    window.location.reload();
  }
}
