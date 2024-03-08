import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IsloggedinService {

  constructor() { }
  private loginstatus : boolean = false;
  isloggedin(){
    this.loginstatus = true;
  }

  status(){
    return this.loginstatus;
  }
}
