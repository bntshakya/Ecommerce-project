import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  id?: number;
  private sub: any;
  public product_object: any;
  public isloading: boolean = true;
  constructor(
    private route: ActivatedRoute,
    private userservice: UserService,
    public cartservice: CartService
  ) {}
  public ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.id = +params['id'];
      setTimeout(() => {
        this.isloading = false;
      }, 1000);
    });
    this.getdetails();
  }

  public getdetails(): void {
    this.userservice
      .getProducts(`https://fakestoreapi.com/products/${this.id}`)
      .subscribe((data) => {
        this.product_object = data;
      });
  }
}
