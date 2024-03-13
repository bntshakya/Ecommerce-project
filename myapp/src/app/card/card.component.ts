import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { UserService } from '../user.service';
import { OnInit } from '@angular/core';
// import { HomepageComponent } from '../homepage/homepage.component';
import { ProductarrayService } from '../productarray.service';
import { FetchproductService } from '../fetchproduct.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  constructor() {}
  @Input() product: any;
}
