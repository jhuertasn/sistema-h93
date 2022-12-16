import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import urlbase from './helper';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {

  constructor(private http:HttpClient) { }

  public listarPreguntas(){
    return this.http.get(`${urlbase}/preguntas/obtener`,{ 
      headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
  });
  }

  public agregarPreguntas(preguntas:any){
    return this.http.post(`${urlbase}/preguntas/agregar`,preguntas,{ 
      headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
  });
  }

  public modificarPreguntas(preguntas:any){
    return this.http.put(`${urlbase}/preguntas/modificar`,preguntas,{ 
      headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
  });
  }

  public obtenerPreguntasExamen(id:any){
    return this.http.get(`${urlbase}/preguntas/examen/${id}`,{ 
      headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
  });
  }

  public obtenerPreguntasUnico(id:any){
    return this.http.get(`${urlbase}/preguntas/obtener/${id}`,{ 
      headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
  });
  }

  public listarPreguntasExamenAdmin(id:any){
    return this.http.get(`${urlbase}/preguntas/examen/todos/${id}`,{ 
      headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
  });
  }

  public evaluarExamen(preguntas:any){
    return this.http.post(`${urlbase}/preguntas/evaluar-examen`,preguntas,{ 
      headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
  });
  }
}
