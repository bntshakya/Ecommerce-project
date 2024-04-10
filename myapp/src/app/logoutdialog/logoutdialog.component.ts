import { Component } from '@angular/core';
import { IsloggedinService } from '../service/isloggedin.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-logoutdialog',
  templateUrl: './logoutdialog.component.html',
  styleUrls: ['./logoutdialog.component.css']
})
export class LogoutdialogComponent {
  constructor(public loginservice : IsloggedinService,public dialog:MatDialog){}
  public logout(){
    this.loginservice.islogout();
    this.dialog.closeAll();
  }

}
