import { Component, OnInit } from '@angular/core';
import { ListaClientes } from '../lista-clientes';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {


  lcliente:ListaClientes[];
  constructor() { }

  ngOnInit(): void {
    this.lcliente = [
      {
      "codCliente":1,
      "apellCliente":"Huertas",
      "correoCliente":"jhuertas@gmail.com",
      "dniCliente":"47610506",
      "nombCliente":"Jordan"
    },
    {
      "codCliente":2,
      "apellCliente":"Deschain",
      "correoCliente":"rdeschain@gmail.com",
      "dniCliente":"54878154",
      "nombCliente":"Roland"
    }
  ];
  }

}
