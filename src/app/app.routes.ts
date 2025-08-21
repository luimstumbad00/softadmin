import { Routes } from '@angular/router';
import { General } from './pages/general/general';
import { Estatus } from './pages/estatus/estatus';
import { authGuard } from './guards/auth-guard'
import { Generalc } from './pages/generalc/generalc';
import { Logina } from './components/logina/logina';
import { Loginc } from './components/loginc/loginc';
export const routes: Routes = [
  { path: 'logina', component: Logina },
  { path: 'loginc', component: Loginc },
  // Paneles admin (protegidos)
  { path: 'general', component: General},
  { path: 'estatus', component: Estatus},
   // Panel cliente (protegido)
  { path: 'generalc', component: Generalc},
  //Default
  { path: '', redirectTo: 'logina', pathMatch: 'full' },
  // Wildcard → login admin
  { path: '**', redirectTo: 'logina' },
];