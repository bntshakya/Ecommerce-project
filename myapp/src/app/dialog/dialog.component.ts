import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  // public product:any;
  public productarray:any = this.cartservice.products;
  constructor(public cartservice:CartService){}
  public computecost():number{
    const value:number = this.cartservice.products.reduce((totalvalue,currentvalue:any) => {
      return totalvalue + currentvalue.price*currentvalue.quantity;
    },0);
    return value;
  }

}
