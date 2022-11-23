import { Component, OnInit} from '@angular/core';
import { ListaClientes } from '../lista-clientes';

@Component({
  selector: 'app-modulodirectivo',
  templateUrl: './modulodirectivo.component.html',
  styleUrls: ['./modulodirectivo.component.css']
})
export class ModulodirectivoComponent implements OnInit {
//se agrego fuera de tiempo
  lcliente:ListaClientes[];
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



