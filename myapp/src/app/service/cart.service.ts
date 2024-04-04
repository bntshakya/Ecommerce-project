import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}
  public products: Array<object> = [];
  public editedproduct: Array<object> = [];
  public addtocart(product: any): void {
    product['quantity'] = 1
    this.products.push(product);
    console.log(this.products);
  }

  // public getcartvalue(): Array<object> {
  //   console.log(this.products);
  //   this.editedproduct = this.products.map((product) => {
  //     return { ...product,quantity:1};
  //   });
  //   // console.log(editedproduct);
  //   return this.editedproduct;
  // }

  public getcartvalue():Array<object>{
    return this.products;
  }
}
