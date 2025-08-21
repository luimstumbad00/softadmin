// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/login/clientes'; // Reemplaza con la URL de tu API
  private apiTrabajadoresUrl = 'http://localhost:8080/login/trabajadores';

  constructor(private http: HttpClient, private router: Router) {}

// Login cliente
  login(RazonSocial: string, RFC: string) {
    const credentials = { RazonSocial, RFC };
    return this.http.post(this.apiUrl, credentials, {
      observe: 'response',
      responseType: 'text'
    }).pipe(
      tap(res => {
        const token = res.body;
        if (token) {
          this.saveToken(token); // Guardar token
          alert("Bienvenido cliente");
          this.router.navigate(['/generalc']); // Redirigir a panel cliente
        }
      }),
      catchError(err => {
      // Mostrar el mensaje del backend en alerta
      const mensaje = err.error || 'Error desconocido';
      alert(`Error: ${mensaje}`);
      return throwError(() => err); // Propagar el error si quieres seguir manejándolo
    })
    );
  }

loginTrabajador(usuario: string, password: string) {
  const credentials = { usuario, password };
  console.log('Iniciando login trabajador...');
  
  return this.http.post(this.apiTrabajadoresUrl, credentials, {
    observe: 'response',
    responseType: 'text'
  }).pipe(
    tap(res => {
      console.log('Respuesta recibida:', res);
      console.log('Status:', res.status);
      console.log('Token body:', res.body);
      
      const token = res.body;
      if (token && token.trim() !== '') {
        this.saveToken(token);
        console.log('Token guardado en localStorage:', localStorage.getItem('jwt'));
        
        alert("Bienvenido");
        
        // Debug de navegación
        console.log('Intentando navegar a /estatus...');
        this.router.navigate(['/estatus']).then(success => {
          console.log('Navegación exitosa:', success);
          if (!success) {
            console.error('Fallo la navegación a /estatus');
            console.log('Rutas disponibles:', this.router.config);
          }
        }).catch(error => {
          console.error('Error en navegación:', error);
        });
      } else {
        console.error('Token vacío o inválido');
        alert('Error: No se recibió token válido');
      }
    }),
    catchError(err => {
      console.error('Error completo:', err);
      console.error('Error status:', err.status);
      console.error('Error message:', err.message);
      console.error('Error response:', err.error);
      
      const mensaje = err.error || 'Error desconocido';
      alert(`Error: ${mensaje}`);
      return throwError(() => err);
    })
  );
}

  // Nuevo método para guardar el token
  private saveToken(token: string): void {
    localStorage.setItem('jwt', token);
  }

  // Nuevo método para obtener el token
  public getToken(): string | null {
    return localStorage.getItem('jwt');
  }

  // Nuevo método para eliminar el token al cerrar sesión
  public logout(): void {
    localStorage.removeItem('jwt');
  }
}