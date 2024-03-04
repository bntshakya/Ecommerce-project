import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  public getProducts(): Observable<any> {
    const url = 'https://fakestoreapi.com/products/category/electronics';
    console.log('at user service');
    return this.http.get<any>(url);
  }
}
