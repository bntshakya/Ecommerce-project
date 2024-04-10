import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { ProductarrayService } from '../productarray.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit{
  constructor(public userservice: UserService) {}
  public isloading:boolean = true;
  public product_array: any[] = [];
  public rawdata: any[] = [];
  public pageEvent: any;
  public length = 20;
  public pageSize = 5;
  public pageIndex = 0;
  public pageSizeOptions = [5, 10];

  handlepage(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.product_array = this.rawdata.slice(
      e.pageIndex * this.pageSize,
      e.pageIndex * this.pageSize + this.pageSize
    );
  }

  ngOnInit(): void {
    this.userservice.getProducts().subscribe((data) => {
      this.rawdata = data;
      this.product_array = data.slice(0, this.pageSize);
      setTimeout(() => {
        this.isloading = false;
      }, 1000);   
    });
  }
}
