import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private formBuilder: FormBuilder){}
  profileForm = this.formBuilder.group({
    firstName: ['',Validators.required],
    lastName: ['',Validators.required],
    email: ['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    password: ['',Validators.required],
  })

  onSubmit() {
    console.log('submitted');
  }

}
