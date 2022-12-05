import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/service/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categorias:any[]
  constructor(private catservice:CategoriaService) { }

  ngOnInit(): void {
    this.catservice.listarCategoria().subscribe(
      (dato:any) => {
          this.categorias = dato;
      });
  }

}
