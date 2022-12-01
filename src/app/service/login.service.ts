import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import urlbase from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //contrullendo los servicios para el token
  public loginStatusSubject = new Subject<Boolean>;
  
  constructor(private httpClient: HttpClient) {

   }

  public generartoken(datalogin:any){
    return this.httpClient.post(`${urlbase}/autenticacion/generartoken`, datalogin);

  } 
  //se crean clases para el login services
  public loginuser (token:any){
    localStorage.setItem('token',token);
    return true;
  }


  public getCurrentUser (){
    return this.httpClient.get(`${urlbase}/autenticacion/userloggin`,{ 
      headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
  }
 
   );
  }

  public gettoken(){
    localStorage.getItem('token')
  }


  public setuser(user:any){
    localStorage.setItem('user',JSON.stringify(user));
  }

  public getuser(){
    let userStr =localStorage.getItem('user');

    if(userStr !==null){
      return JSON.parse(userStr);
    }else{
      this.logout();
      return null;
    }
  }

  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return null;
  }  

  public isloggin(){
    let tokenStr = localStorage.getItem('token');
    //cuando nuestro token va estar nulo, indefinido o vacio
    if (tokenStr == null || tokenStr == undefined || tokenStr == ''){
      return false;
    }else{
      return true;
    }
  }

  //para traer el userrol 
  public getUserRol(){
    let userrol = this.getuser();
   //nos retorna el authority de la base de datos
   //esto sirve para la idenficiacion si el usuario es
   //cliente o admin
   return userrol.authorities[0].authority;
  }

}
