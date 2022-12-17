import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-respuestas',
  templateUrl: './respuestas.component.html',
  styleUrls: ['./respuestas.component.css']
})
export class RespuestasComponent 
//implements OnInit 
{

 // constructor() { }

  //ngOnInit(): void {
  //}

  onSubmit(form: NgForm){
    console.log(form.value.description);

}

}