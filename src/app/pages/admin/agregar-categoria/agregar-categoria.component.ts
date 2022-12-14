import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/service/categoria.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-categoria',
  templateUrl: './agregar-categoria.component.html',
  styleUrls: ['./agregar-categoria.component.css']
})
export class AgregarCategoriaComponent implements OnInit {

  categoria ={
    titulo: '',
    descripcion:''
  }

  constructor(private catservice:CategoriaService,private router:Router,private snack:MatSnackBar) { }

  ngOnInit(): void {

  }

  formSubmit(){
    if(this.categoria.titulo.trim() == "" || this.categoria.titulo == null){
      this.snack.open("El titulo es requerido !!", '', {duration:3000})
      return; 
    }
    if(this.categoria.descripcion.trim() == "" || this.categoria.descripcion == null){
      this.snack.open("La descripcion es requerida !!", '', {duration:3000})
      return; 
    }

    this.catservice.agregarCategoria(this.categoria).subscribe(
      (dato:any) =>{
        Swal.fire("La Categoria fue agregada con exito","success");
        this.router.navigate(['/admin/categoria-view']);
      }
    )

  }

 
}
