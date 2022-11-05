import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import urlbase from './helper';


@Injectable({
  providedIn: 'root'
})
export class UserService {
// variable httpClient para la conecion con la BD y no usar postman
  constructor(private httpClient: HttpClient) { }
  public insertarusuario (user:any){
    return this.httpClient.post(`${urlbase}/usuario/registrarUsuario`, user);
  }
}
