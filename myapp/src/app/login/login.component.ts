import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public profileForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private auth: AuthService) {}
  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
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
      confirm_password: [
        '',
        [Validators.required, Validators.minLength(8),this.validatePassword],
      ],
      terms: [false, Validators.requiredTrue],
    });
  }
  validatePassword(control: AbstractControl): { [key: string]: any } | null {
    const confirmPassword = control.value;
    const passwordControl = control.root.get('password');
    if (!passwordControl) {
      return null; 
    }
    const password = passwordControl.value;

    if (confirmPassword !== password) {
      return { passwordMismatch: 'Passwords do not match'};
    }
    return null;
  }

  onSubmit() {
    this.auth.register(
      this.profileForm.value.firstName,
      this.profileForm.value.lastName,
      this.profileForm.value.email,
      this.profileForm.value.password
    );
    this.profileForm.reset();
    this.profileForm.markAsPristine();
    this.profileForm.markAsUntouched();
    this.profileForm.updateValueAndValidity();
  }
}
