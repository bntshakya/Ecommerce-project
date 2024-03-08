import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TokenstorageService } from '../service/tokenstorage.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  public form!: FormGroup;
  private email: string = '';
  private password: string = '';
  constructor(private formbuilder: FormBuilder, private http: HttpClient, private tokenstorage : TokenstorageService) {}

  ngOnInit(): void {
    this.form = this.formbuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    this.email = this.form.value.email;
    this.password = this.form.value.password;
    // console.log(this.email, this.password);
    // this.form.reset
    this.http.post('https://fakestoreapi.com/auth/login',{username: 'mor_2314', password: '83r5^_'}).subscribe((token) => {
      this.tokenstorage.savetoken(token);
    });
  }
}
