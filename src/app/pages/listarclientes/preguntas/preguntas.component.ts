import { Component, OnInit } from '@angular/core';
import { Question } from './preguntas.model';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent  {

  question: Question = new Question(
    'Nueva pregunta',
    'Cuanto es 2 + 2 .',
    new Date(),
    'devicon-android-plain'
);

}
