import {
  Component,
  ElementRef,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CartService } from '../service/cart.service';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit, OnChanges {
  constructor(
    public cartservice: CartService,
    public formbuilder: FormBuilder
  ) {}
  // @ViewChild('inputquantity') input : ElementRef<HTMLInputElement>
  ngOnInit(): void {
    this.profileForm = this.formbuilder.group({
      inputquantity: [''],
    });
    this.dataSource = this.cartservice.getcartvalue();
    console.log(this.dataSource, 'init');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = this.cartservice.getcartvalue();
    console.log('onchanges');
  }

  public profileForm!: FormGroup;
  public dataSource: Array<object> = this.cartservice.getcartvalue();
  public displayedColumns: string[] = ['title', 'price', 'quantity'];
  public updatequantity(obj: any): void {
    obj['quantity'] = this.profileForm.value.inputquantity;
  }
  public remove(obj: any): void {
    console.log(obj);
    console.log(this.cartservice.products);

    console.log(this.cartservice.products.indexOf(obj));
    const index = this.cartservice.products.indexOf(obj);
    if (index > -1) {
      this.cartservice.products.splice(index, 1);
      this.dataSource = this.cartservice.getcartvalue();

      // this.dataSource.splice(index, 1);
      // this.dataSource.splice(index, 1);
      console.log(this.dataSource, 'datasource');
    }
    // this.dataSource = this.cartservice.getcartvalue();
    this.ngOnInit();
    // this.dataSource = this.cartservice.getcartvalue();
  }
}
