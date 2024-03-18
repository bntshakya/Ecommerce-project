import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}
  public products: object[] = [];

  addtocart(product: object) {
    this.products.push(product);
    console.log(this.products);
  }
}
