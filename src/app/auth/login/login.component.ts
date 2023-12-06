import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm = new FormGroup({
    user: new FormControl('admin', Validators.required),
    password: new FormControl('admin', Validators.required),
  });

  authService = inject(AuthService);
  router = inject(Router)

  onSubmit() {
    this.authService
      .login(this.loginForm.value)
      .subscribe((isAuthenticated) => {
        if (isAuthenticated) {
          this.router.navigate(['/'])
        }
      });
  }
}
