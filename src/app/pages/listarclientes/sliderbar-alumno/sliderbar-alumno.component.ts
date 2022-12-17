import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-sliderbar-alumno',
  templateUrl: './sliderbar-alumno.component.html',
  styleUrls: ['./sliderbar-alumno.component.css']
})
export class SliderbarAlumnoComponent implements OnInit {

  constructor(private login:LoginService) { }

  ngOnInit(): void {
  }

  public logout(){
    this.login.logout();
    window.location.reload();
  }

}
