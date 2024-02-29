import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
  
export class LoginComponent {
  constructor(private formBuilder: FormBuilder, private auth: AuthService) {}
  

  profileForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ],
    ],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  onSubmit() {
    this.auth.register(
      this.profileForm.value.firstName,
      this.profileForm.value.lastName,
      this.profileForm.value.email,
      this.profileForm.value.password
    );
  }
}
