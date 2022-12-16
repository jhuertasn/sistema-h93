import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/service/categoria.service';
import { ExamenService } from 'src/app/service/examen.service';

@Component({
  selector: 'app-agregar-examen',
  templateUrl: './agregar-examen.component.html',
  styleUrls: ['./agregar-examen.component.css']
})
export class AgregarExamenComponent implements OnInit {

  categorias:any = [];

  examenData = {
    titulo:'',
    descripcion:'',
    puntosMaximos:'',
    numeroDePreguntas:'',
    activo:true,
    categoria:{
      categoriaId:''
    }
  }


  constructor(private catservice:CategoriaService, private exaservice:ExamenService, private router:Router, private snack:MatSnackBar) { }

  ngOnInit(): void {
    this.catservice.listarCategoria().subscribe(
      (dato:any)=>{
        this.categorias = dato;
      }
    )

  }

  guardarExamen(){
    this.exaservice.agregarExamen(this.examenData).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(["/admin/examen-view"]);
      }
    )
  }

}
