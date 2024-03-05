import { Injectable } from '@angular/core';
// import { ProductarrayService } from './productarray.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class FetchproductService {
  constructor(public userservice: UserService) {}
  product_array: any[] = [];
  fetchProduct() {
    this.userservice.getProducts().subscribe((data) => {
      // console.log(this.productarrayservice.product_array);
      this.product_array = data;
      console.log(this.product_array);
      console.log('at fetch product');
    });
    return this.product_array;
  }
}
