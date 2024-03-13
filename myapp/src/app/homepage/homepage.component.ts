import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ProductarrayService } from '../productarray.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit{
  constructor(public userservice:UserService) { }
  public product_array: any[] = [];

  ngOnInit(): void {
    this.userservice.getProducts().subscribe((data) => {
      this.product_array = data;
    });
  }
}
