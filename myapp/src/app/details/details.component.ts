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
  public product_object : any ;
  constructor(
    private route: ActivatedRoute,
    private userservice: UserService
  ) {}
  public ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.id = +params['id'];
    });
    this.getdetails();
  }
  
  public getdetails(): void {
    this.userservice.getProducts(
      `https://fakestoreapi.com/products/${this.id}`
    ).subscribe((data)=>{
      this.product_object = data;
    });
  }
}
