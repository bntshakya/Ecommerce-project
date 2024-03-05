import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  id?: number;
  private sub: any;
  constructor(
    private route: ActivatedRoute,
    private userservice: UserService
  ) {}
  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.id = +params['id'];
    });
   this.getdetails(); 
  }
  

  getdetails() {
    const product_info = this.userservice.getProducts(
      `https://fakestoreapi.com/products/${this.id}`
    ).subscribe((data)=>{
      console.log(data);
    });
    // console.log(product_info, 'a');
  }

  
}
