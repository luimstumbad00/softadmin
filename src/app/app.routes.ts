import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { Logadm } from './pages/logadm/logadm';

export const routes: Routes = [
  { path: 'logadm', component: Logadm },

    // Redirige la raíz al login
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // Ruta del login
  { path: 'login', component: LoginComponent },

  // Catch-all -> redirige a login (útil mientras pruebas)
  { path: '**', redirectTo: 'login' },  
];
