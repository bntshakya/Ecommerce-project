import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenstorageService {
  constructor() {}
  savetoken(token: any) {
    sessionStorage.setItem('token_fakestore', token['token']);
  }
}
