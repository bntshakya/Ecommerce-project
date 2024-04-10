import { Component, OnInit } from '@angular/core';
import { IsloggedinService } from '../service/isloggedin.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  constructor(public isloggedin:IsloggedinService){}
  public menuopen : boolean = false;
  ngOnInit(): void {
    this.menuopen = false;
  }
  toggle(){
    const el = document.querySelector('.nav-wrapper-small');
    el?.classList.toggle('togglestyle');  
    this.menuopen = !this.menuopen;  
  }
}
