import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PreguntaService } from 'src/app/service/pregunta.service';

@Component({
  selector: 'app-agregar-pregunta',
  templateUrl: './agregar-pregunta.component.html',
  styleUrls: ['./agregar-pregunta.component.css']
})
export class AgregarPreguntaComponent implements OnInit {

  examenId:any;
  titulo:any;
  pregunta:any = {
    examen : {},
    contenido : '',
    opcion1 : '',
    opcion2 : '',
    opcion3 : '',
    opcion4 : '',
    respuesta : ''
  }

  constructor(private pregservice:PreguntaService, private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.examenId = this.activeRoute.snapshot.params['examenId'];
    this.titulo = this.activeRoute.snapshot.params['titulo'];
    this.pregunta.examen['examenId'] = this.examenId;
  }

  formSubmit(){
    this.pregservice.agregarPreguntas(this.pregunta).subscribe(
      (data) => {
        console.log(data);
      }
    )
  }

}
