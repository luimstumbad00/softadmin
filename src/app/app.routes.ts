import { Routes } from '@angular/router';
import { General } from './pages/general/general';
import { Estatus } from './pages/estatus/estatus';

export const routes: Routes = [
    {path: '', component: General }, //Llamado a componentes de clases
    {path: 'General', component: General},
    {path: 'Estatus', component: Estatus},
    {path: '**', component: General}

];
