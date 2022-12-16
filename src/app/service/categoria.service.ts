import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import urlbase from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http:HttpClient) { }

  //get
  public listarCategoria(){
    return this.http.get(`${urlbase}/categoria/obtener`,{ 
      //llamando el token a listarcategoria
      headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
  });
  }

  //post
  public agregarCategoria(categoria:any){
    return this.http.post(`${urlbase}/categoria/agregar`,categoria,{ 
      //llamando el token a agregarcategoria
      headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
  });
  }
}


