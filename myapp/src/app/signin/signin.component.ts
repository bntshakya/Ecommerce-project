import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TokenstorageService } from '../service/tokenstorage.service';
import { IsloggedinService } from '../service/isloggedin.service';
import { Router, RouterEvent } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  public form!: FormGroup;
  private email: string = '';
  private password: string = '';
  public values: any = [];
  public isDataAvailable: boolean = false;

  constructor(
    private formbuilder: FormBuilder,
    private http: HttpClient,
    private tokenstorage: TokenstorageService,
    private isloggedin: IsloggedinService,
    public router: Router,
    public snackbar : MatSnackBar,
  ) {}

  public ngOnInit(): void {
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

  public getvalue() {
    this.http
      .get('https://65ddc0a6dccfcd562f555f42.mockapi.io/register')
      .subscribe((values: any) => {
        values.map((item: any) => {
          console.log(item, 'item');
          if (
            item['email'] === this.email &&
            item['password'] === this.password
          ) {
            this.isDataAvailable = true;
          }
        });
            if (this.isDataAvailable) {
              this.http
                .post('https://fakestoreapi.com/auth/login', {
                  username: 'mor_2314',
                  password: '83r5^_',
                })
                .subscribe((token) => {
                  this.tokenstorage.savetoken(token);
                  this.isloggedin.isloggedin();
                });
              this.form.reset();
              this.router.navigate(['/homepage']);
              this.snackbar.open('Login Successful', 'Dismiss', {
                horizontalPosition: 'center',
                verticalPosition: 'top',
                duration: 2000,
              });
            } else {
              this.snackbar.open('Incorrect Credentials', 'Dismiss', {
                horizontalPosition: 'center',
                verticalPosition: 'top',
                duration: 2000,
              });
            }
      });
  }

  public onSubmit(): void {
    this.email = this.form.value.email;
    this.password = this.form.value.password;
    this.getvalue();

  }
}
