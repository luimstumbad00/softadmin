// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/login/clientes';
  private apiTrabajadoresUrl = 'http://localhost:8080/login/trabajadores';
  private tokenKey = 'jwt';

  constructor(private http: HttpClient, private router: Router) {}

  // Login cliente
  login(RazonSocial: string, RFC: string): Observable<HttpResponse<string>> {
    const credentials = { RazonSocial, RFC };
    return this.http.post(this.apiUrl, credentials, {
      observe: 'response',
      responseType: 'text'
    }).pipe(
      tap(res => this.handleLoginResponse(res.body, '/generalc')),
      catchError(err => this.handleLoginError(err))
    );
  }

  // Login trabajador
  loginTrabajador(usuario: string, password: string): Observable<HttpResponse<string>> {
    const credentials = { usuario, password };
    return this.http.post(this.apiTrabajadoresUrl, credentials, {
      observe: 'response',
      responseType: 'text'
    }).pipe(
      tap(res => this.handleLoginResponse(res.body, '/estatus')),
      catchError(err => this.handleLoginError(err))
    );
  }

  // Guardar token
  private saveToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  // Obtener token
  public getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // Cerrar sesión
  public logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/logina']);
  }

  // Cerrar sesión del cliente  
  public logoutc(): void {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/logina']);
  }

  // Verificar si hay sesión activa
  public isLoggedIn(): boolean {
    return !!this.getToken();
  }

  // Manejo común de respuesta de login
  private handleLoginResponse(token: string | null, redirectTo: string) {
    if (token && token.trim() !== '') {
      this.saveToken(token);
      alert('Bienvenido');
      this.router.navigate([redirectTo]);
    } else {
      alert('Error: No se recibió token válido');
    }
  }

  // Manejo común de errores de login
  private handleLoginError(err: any) {
    console.error('Error de login:', err);
    const mensaje = err?.error || err?.message || 'Error desconocido';
    alert(`Error: ${mensaje}`);
    return throwError(() => err);
  }
}
