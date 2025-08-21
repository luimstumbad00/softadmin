import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-loginc',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './loginc.html',
  styleUrl: './loginc.css'
})
export class Loginc {
  showPassword = false;
  form = new FormGroup({
    RazonSocial: new FormControl('', Validators.required),
    RFC: new FormControl('', Validators.required)
  });
  logoBersa = "../../../assets/bersa_logo.png";
  logoSA = "../../../assets/sa_logo.png";
  serverError: string | null = null;
  loading = false;

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.serverError = null;
    const { RazonSocial, RFC } = this.form.value;

    this.auth.login(RazonSocial!, RFC!).subscribe({
  next: (response) => {
    if (response.status === 200) {
      const token = response.body;
      if (token) {
        localStorage.setItem('jwt', token);
        this.serverError = null;
        this.router.navigate(['/dashboard']);
      } else {
        this.serverError = 'No se recibió token en la respuesta.';
      }
    } else {
      // Aunque aquí normalmente no llegas porque status != 200 va a error
      this.serverError = response.body || 'Error inesperado.';
    }
    this.loading = false;
  },
  error: (err) => {
  this.loading = false;
  console.log('Error recibido del backend:', err);
  this.serverError =
    err?.error?.message ??
    (typeof err?.error === 'string' ? err.error : null) ??
    (err?.error?.text ? err.error.text : null) ??
    err?.statusText ??
    'Error desconocido del servidor.';
}
});
  }

}
