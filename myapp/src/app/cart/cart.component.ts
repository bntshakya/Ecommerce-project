import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CartService } from '../service/cart.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(
    public cartservice: CartService,
    public formbuilder: FormBuilder,
    public dialog: MatDialog
  ) {}
  public isquantitytext: {[id:string]:boolean} = {};

  ngOnInit(): void {
    this.cartservice.product$.subscribe((newProducts) => {
      this.dataSource = newProducts;
    });
    this.dataSource = this.cartservice.getcartvalue();
    // this.isquantitytext[this.cartservice.products.id] = 

    for (const product of this.dataSource) {
      this.isquantitytext[product.id] = true
      this.profileForms[product.id] = this.formbuilder.group({
        inputquantity: [
          '',
          [Validators.required, Validators.pattern(/^[1-9][0-9]*$/)],
        ],
      });
    }
  }

  public profileForms: { [id: string]: FormGroup } = {};
  public dataSource: any[] = this.cartservice.getcartvalue();
  public displayedColumns: string[] = ['product', 'title', 'price', 'quantity'];
  public updatequantity(obj: any): void {
    obj['quantity'] = this.profileForms[obj.id].value.inputquantity;
    this.profileForms[obj.id].reset();
  }
  public newarray: Array<object> = [];

  public remove(obj: any): void {
    this.cartservice.products = this.cartservice.products.filter(
      (data: any) => {
        return data.id !== obj.id;
      }
    );
    this.dataSource = this.cartservice.products;
  }

  public opendialog() {
    const dialogref = this.dialog.open(DialogComponent);
  }

  public toggle(id:string) {
    this.isquantitytext[id] = !this.isquantitytext[id];
  }
}
