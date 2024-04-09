import { ChangeDetectorRef, Component } from '@angular/core';
import { CartService } from '../service/cart.service';
import { Dialog } from '@angular/cdk/dialog';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  // public product:any;
  public productarray:any = this.cartservice.products;
  constructor(public cartservice:CartService,public dialog:MatDialog,public cdref:ChangeDetectorRef){}
  public computecost():number{
    const value:number = this.cartservice.products.reduce((totalvalue,currentvalue:any) => {
      return totalvalue + currentvalue.price*currentvalue.quantity;
    },0);
    return value;
  }

  public pay(){
    this.dialog.closeAll();
    this.cartservice.updateProducts([]);
    this.cartservice.products = [];
    this.cdref.markForCheck();
  }



}
