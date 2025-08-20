import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const token = authService.getToken();
  if (token) {
    return true; // deja pasar a /general
  } else {
    // Redirección segura usando UrlTree
    return router.createUrlTree(['/generalc']);

  }
};