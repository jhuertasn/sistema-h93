import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PreguntaService } from 'src/app/service/pregunta.service';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {

  examenId:any;
  titulo:any;
  preguntas:any = [];

  constructor(private pregservice:PreguntaService, private activerouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.examenId = this.activerouter.snapshot.params['examenId'];
    this.titulo = this.activerouter.snapshot.params['titulo'];
    this.pregservice.listarPreguntasExamenAdmin(this.examenId).subscribe(
      (dato:any) =>{
        this.preguntas = dato;
      }
    )

  }
}
