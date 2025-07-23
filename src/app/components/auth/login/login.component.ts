import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ErrorService } from '../../../services/error.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [ErrorService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private errorService: ErrorService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      motDePasse: ['', Validators.required]
    });
  }
  onSubmit(): void {
    if (this.loginForm.valid) {
      this.http.post<any>('http://localhost:8081/auth/login', this.loginForm.value).subscribe({
        next: (response) => {
          if (response && response.token) {
            localStorage.setItem('token', response.token);
            this.router.navigate(['/']);
          } else {
            this.errorMessage = 'Authentification échouée. Aucun token reçu.';
          }
        },
        error: (error) => {
          this.errorMessage = this.errorService.handleError(error);
        }
      });
    }
  }
}