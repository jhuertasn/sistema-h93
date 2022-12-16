import { Component, OnInit } from '@angular/core';
import { ExamenService } from 'src/app/service/examen.service';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent implements OnInit {

  examenes:any []= [];

  constructor(private exaservice:ExamenService) { }

  ngOnInit(): void {
    this.exaservice.listarExamen().subscribe(
      (dato:any)=>{
        this.examenes=dato;
      }
    )
  
  }
}
