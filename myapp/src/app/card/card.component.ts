import { Component, Input } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  constructor(public cartservice: CartService) {}
  @Input() product: any;
}
