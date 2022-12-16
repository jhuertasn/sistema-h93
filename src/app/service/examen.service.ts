import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import urlbase from './helper';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {

  constructor(private http: HttpClient) { }

  //get
  public listarExamen(){
    return this.http.get(`${urlbase}/examen/obtener`,{ 
      headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
  });
  }

  //post
  public agregarExamen(examen:any){
    return this.http.post(`${urlbase}/examen/agregar`,examen,{ 
      headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
  });
  }

  //put
  public modificarExamen(examen:any){
    return this.http.put(`${urlbase}/examen/modificar`,examen,{ 
      headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
  });
  }

  //get unico
  public obtenerExamenUnico(id:any){
    return this.http.get(`${urlbase}/examen/obtener/${id}`,{ 
      headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
  });
  }

  //delete unico
  public eliminarExamenUnico(id:any){
    return this.http.delete(`${urlbase}/examen/eliminar/${id}`,{ 
      headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
  });
  }

  //get por categoria
  public listarExamenCategoria(id:any){
    return this.http.get(`${urlbase}/examen/categoria/${id}`,{ 
      headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
  });
  }

  //get por examen activo
  public listarExamenActivo(){
    return this.http.get(`${urlbase}/examen/activo`,{ 
      headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
  });
  }

  //get por examen activo y categoria
  public listarExamenActivoCategoria(id:any){
    return this.http.get(`${urlbase}/examen/categoria/activo/${id}`,{ 
      headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
  });
  }
}
