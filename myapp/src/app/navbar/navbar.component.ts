import { Component, OnInit } from '@angular/core';
import { IsloggedinService } from '../service/isloggedin.service';
import { MatDialog } from '@angular/material/dialog';
import { LogoutdialogComponent } from '../logoutdialog/logoutdialog.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  constructor(public isloggedin:IsloggedinService,public dialog:MatDialog){}
  public menuopen : boolean = false;
  ngOnInit(): void {
    this.menuopen = false;
  }
  public toggle(){
    const el = document.querySelector('.nav-wrapper-small');
    el?.classList.toggle('togglestyle');  
    this.menuopen = !this.menuopen;  
  }

  public opendialog(){
    const dialogref = this.dialog.open(LogoutdialogComponent,{
      height:'150px',
      width:'500px'
    })
  }

}
