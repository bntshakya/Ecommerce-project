import { Injectable } from '@angular/core';
import { IsloggedinService } from './isloggedin.service';
import { Router, RouterLink } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(public isloggedin: IsloggedinService, public router: Router) {}
  public products: Array<object> = [];
  public editedproduct: Array<object> = [];
  public inCart: boolean = false
  private productSubject = new BehaviorSubject<any[]>([]);
  product$ = this.productSubject.asObservable();

  public updateProducts(newProducts:any[]){
    this.productSubject.next(newProducts);
  }
  public addtocart(product: any): void {
    if (this.isloggedin.status()) {
        this.inCart = false;
        this.products.map((data:any)=>{
          if(data.id === product.id){
            this.inCart = true;
          }
        }
      )
      if (!this.inCart) {
        product['quantity'] = 1;
        this.products.push(product);
      }
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
    this.products.map((data: any) => {
      if(data.id === obj.id) {
        this.inCart = true
      }
    })
    return this.inCart
  }
}
