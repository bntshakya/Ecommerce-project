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
  // public src: string = '';
  public product_object : any ;
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
    this.userservice.getProducts(
      `https://fakestoreapi.com/products/${this.id}`
    ).subscribe((data)=>{
      // console.log(data);
      this.product_object = data;
      // this.src = this.product_object?.image;
      // console.log(this.product_objectf);
    });
    // console.log(product_info, 'a');
  }

  
}
