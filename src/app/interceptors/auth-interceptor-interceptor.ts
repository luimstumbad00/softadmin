import { HttpInterceptorFn, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth';
import { catchError, throwError } from 'rxjs';

export const authInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getToken();

  let authReq = req;
  if (token) {
    authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  return next(authReq).pipe(
    catchError((err: HttpErrorResponse) => {
      // Si el backend dice que no autorizado o token inválido, hacer logout
      if (err.status === 401 || err.status === 403) {
        console.warn('Token inválido o expirado, cerrando sesión...');
        authService.logout();
      }
      return throwError(() => err);
    })
  );
};
