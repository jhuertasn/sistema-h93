import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-sliderbar',
  templateUrl: './sliderbar.component.html',
  styleUrls: ['./sliderbar.component.css']
})
export class SliderbarComponent implements OnInit {

  constructor(private login:LoginService) { }

  ngOnInit(): void {
  }

  public logout(){
    this.login.logout();
    window.location.reload();
  }

}
