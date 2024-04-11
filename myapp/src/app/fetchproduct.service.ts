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
      this.product_array = data;
    });
    return this.product_array;
  }
}
