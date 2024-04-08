import { Injectable } from '@angular/core';
import { IsloggedinService } from './isloggedin.service';
import { Router, RouterLink } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(public isloggedin: IsloggedinService, public router: Router) {}
  public products: Array<object> = [];
  public editedproduct: Array<object> = [];
  public inCart: boolean = false

  public addtocart(product: any): void {
    if (this.isloggedin.status()) {
        // console.log(!this.isincart(product),'insideaddtocart');
        this.inCart = false;
        this.products.map((data:any)=>{
          if(data.id === product.id){
            this.inCart = true;
          }
        }
      )
      if(!this.inCart){
        product['quantity'] = 1;
        this.products.push(product);
      }
      
      // if (!this.isincart(product)) {
      //   console.log('inside if');
      //   product['quantity'] = 1;
      //   this.products.push(product);
      //   // this.inCart = true;
      // } else {
      //   console.log('inside else');
      // }
    } 
    else {
      this.router.navigate(['/signin']);
    }
  }

  public getcartvalue(): Array<object> {
    return this.products; 
  }

  public removefromcart(obj: any): void {
    const index = this.products.indexOf(obj);
    if (index > -1) {
      this.products.splice(index, 1);
    }
  }

  public isincart(obj: any): boolean{
    // return this.products.some((data: any) => {
    //   console.log('dataid', data.id);
    //   console.log('objid', obj.id);
    //   console.log(data.id === obj.id);
    //   data.id === obj.id; // return true even if one instance is found
    // });
    console.log("herer", obj.id)
    this.products.map((data: any) => {
      console.log('data', data.id)
      if(data.id === obj.id) {
        this.inCart = true
      }
    })
    return this.inCart
  }
}
