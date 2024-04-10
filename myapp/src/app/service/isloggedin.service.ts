import { Injectable } from '@angular/core';
import { TokenstorageService } from './tokenstorage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IsloggedinService {

  constructor(public tokenstorage:TokenstorageService,public router:Router) { }
  private loginstatus : boolean = false;
  isloggedin(){
    this.loginstatus = true;
  }

  status(){
    return this.loginstatus;
  }

  islogout(){
    this.loginstatus = false;
    this.tokenstorage.removetoken();
    this.router.navigate(['/','homepage']);
  }
}
