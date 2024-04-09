import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
    register(firstName: string|null|undefined, lastName: string|null|undefined, email: string|null|undefined, password: string|null|undefined) {
    const url = 'https://65ddc0a6dccfcd562f555f42.mockapi.io/register';

    const body = {
      firstName,
      lastName,
      email,
      password
    }

    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    this.http.post(url,body,httpOptions).subscribe(()=>{
      console.log('User registered');
    });

  
  }
}
