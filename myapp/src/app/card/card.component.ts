import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { OnInit } from '@angular/core';
// import { HomepageComponent } from '../homepage/homepage.component';
import { ProductarrayService } from '../productarray.service';
import { FetchproductService } from '../fetchproduct.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  constructor(
    public productarrayservice: ProductarrayService,
    public fetchproduct: FetchproductService,
    public userservice: UserService
  ) {
    // this.product_array = this.fetchproduct.fetchProduct();
    // console.log('at card constructor', this.fetchproduct.fetchProduct());
  }
  product_array: any[] = [];

  product_name: string = '';
  product_price: number = 0;
  product_description: string = '';
  product_photo: string = '';
  product_category: string = '';

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
