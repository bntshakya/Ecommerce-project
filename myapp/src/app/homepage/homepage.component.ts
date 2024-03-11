import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ProductarrayService } from '../productarray.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit{
  constructor(public userservice:UserService) { // public productarrayservice: ProductarrayService // public userService: UserService,
    console.log('at homepage constructor');
  }
  product_array: any[] = [];
  // ngOnInit(): void {
  //   this.userService.getProducts().subscribe((data) => {
  //     this.productarrayservice.product_array = data;
  //     console.log(this.productarrayservice.product_array);
  //   });
  // }

  ngOnInit(): void {
    // console.log('at card oninit');
    // console.log(this.product_array, 'av');
    this.userservice.getProducts().subscribe((data) => {
      this.product_array = data;
      // this.product_array = this.productarrayservice.product_array;
      // console.log(this.product_array);
      // console.log('at card oninit');
      // this.product_name = this.product_array[0].title;
      // this.product_price = this.product_array[0].price;
      // this.product_description =
      //   this.product_array[0].description;
      // this.product_photo = this.product_array[0].image;
      // this.product_category =
      //   this.product_array[0].category;
    });
  }
}
