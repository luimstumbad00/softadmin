import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tabla',
  imports: [CommonModule],
  templateUrl: './tabla.html',
  styleUrl: './tabla.css'
})
export class Tabla {
getStatusClass (estatus: string): string{
switch (estatus.toLowerCase()) {
      case 'en curso':
        return 'en-curso';
      case 'retrasado':
        return 'retrasado';
      default:
        return '';
    }
}

   servicios = [
    {
      cliente: 'Owen',
      equipo: 'Máquina',
      clave: '0123abc',
      descripcion: 'Descanso',
      fecha: '25/07/2025',
      estatus: 'En curso'
    },
    {
      cliente: 'Owen',
      equipo: 'Máquina',
      clave: '0desfjds',
      descripcion: 'Descanso',
      fecha: '24/07/2025',
      estatus: 'Retrasado'
    },
    {
      cliente: 'Owen',
      equipo: 'Máquina',
      clave: 'asd7d7a',
      descripcion: 'Descanso',
      fecha: '22/07/2025',
      estatus: 'En curso'
    },
    {
      cliente: 'Owen',
      equipo: 'Máquina',
      clave: 'f9as7df',
      descripcion: 'Descanso',
      fecha: '12/07/2025',
      estatus: 'En curso'
    },
    {
      cliente: 'Owen',
      equipo: 'Máquina',
      clave: '0123abc',
      descripcion: 'Descanso',
      fecha: '05/07/2025',
      estatus: 'En curso'
    }
  ];

}
