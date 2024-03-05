import { Component, OnInit } from '@angular/core';
// import { UserService } from '../user.service';
import { ProductarrayService } from '../productarray.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  constructor() { // public productarrayservice: ProductarrayService // public userService: UserService,
    console.log('at homepage constructor');
  }
  // ngOnInit(): void {
  //   this.userService.getProducts().subscribe((data) => {
  //     this.productarrayservice.product_array = data;
  //     console.log(this.productarrayservice.product_array);
  //   });
  // }
}
