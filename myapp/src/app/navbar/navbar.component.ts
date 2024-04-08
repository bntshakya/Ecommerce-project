import { Component } from '@angular/core';
import { IsloggedinService } from '../service/isloggedin.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public isloggedin:IsloggedinService){}
}
