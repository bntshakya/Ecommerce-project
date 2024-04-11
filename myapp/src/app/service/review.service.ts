import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(public reviewitems:Array<object> = []) { }

  addreview(product:any){
    
  }
}
