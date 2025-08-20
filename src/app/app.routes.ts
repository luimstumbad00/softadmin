import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { Logadm } from './pages/logadm/logadm';
import { General } from './pages/general/general';
import { Estatus } from './pages/estatus/estatus';
import { authGuard } from './guards/auth-guard'
import { Generalc } from './pages/generalc/generalc';

export const routes: Routes = [
  { path: 'logadm', component: Logadm },
  { path: 'generalc', component: Generalc }, // login, sin guard
  { path: 'general', component: General, canActivate: [authGuard] }, // protegida
  { path: '', redirectTo: 'estatus', pathMatch: 'full' }, // sin guard
  { path: 'estatus', component: Estatus,}, // sin guard
  { path: '**', redirectTo: 'estatus' },
];