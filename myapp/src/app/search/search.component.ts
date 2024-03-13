import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  public filterparams!: FormGroup;

  ngOnInit(): void {
    this.filterparams = this.formbuilder.group({
      minprice: ['', Validators.pattern('^[0-9]*$')],
      maxprice: ['', Validators.pattern('^[0-9]*$')],
      mclothing: [true],
      fclothing: [true],
      electronics: [true],
      jewelery: [true],
    });
  }

  onsubmit() {
    const selectedCategories: string[] = [];
    for (const category in this.filterparams.value){
      if (this.filterparams.value[category]){
        selectedCategories.push(category);
      }
    }
    const queryParams = {
      minprice: this.filterparams.value.minprice,
      maxprice: this.filterparams.value.maxprice,
      products: selectedCategories.join(','),
    };

    this.router.navigate(['.'], {
      relativeTo: this.route,
      queryParams: queryParams,
    });
  }
}
