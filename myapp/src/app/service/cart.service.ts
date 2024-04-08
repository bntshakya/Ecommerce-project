import { Injectable } from '@angular/core';
import { IsloggedinService } from './isloggedin.service';
import { Router, RouterLink } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(public isloggedin:IsloggedinService,public router:Router) {}
  public products: Array<object> = [];
  public editedproduct: Array<object> = [];
  public addtocart(product: any): void {
    if(this.isloggedin.status()){
    product['quantity'] = 1
    this.products.push(product);
    }
    else{
      this.router.navigate(['/signin']);
    }
  }
  
  public getcartvalue():Array<object>{
    return this.products;
  }

  public removefromcart(obj:any):void{
    const index = this.products.indexOf(obj);
    if (index > -1){
      this.products.splice(index,1);
    }
  }


}
