import { Component, OnInit } from '@angular/core';
import { ExamenService } from 'src/app/service/examen.service';
import { ListarExamen } from './listarExamen';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent implements OnInit {

  examenes:ListarExamen[]

  constructor(private exaservice:ExamenService) { }

  ngOnInit(): void {
    this.exaservice.listarExamen().subscribe(
      (dato:any)=>{
        this.examenes=dato;
      }
    )
  
  }
}
