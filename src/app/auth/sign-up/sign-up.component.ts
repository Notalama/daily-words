import { AuthorizationService } from '../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html'
})
export class SignUpComponent implements OnInit {

  constructor(private fb: FormBuilder, private authService: AuthorizationService) { }

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });
  ngOnInit() {}

  onSubmit() {
    this.authService.registerUser(this.form.value);
  }
}
