import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  imports: [CommonModule],
  templateUrl: './tarjetas.html',
  styleUrl: './tarjetas.css'
})
export class Tarjetas {

  // Este objeto contendrá la informacion importante en el carrusel
  //(Proxiamemnte jalados de la base de datos)
  servicios = [
    {
      cliente: 'Clínica 15 ',
    codigo: 'abc123',
    mensaje: 'Iniciando servicio',
    fecha: '27/07/2025',
    hora: '13:08',
    }
  ]

  getStatusClass(estatus: string): string {
    switch (estatus.toLowerCase()) {
      case 'en curso':
        return 'en-curso';
      case 'retrasado':
        return 'retrasado';
      default:
        return '';
    }
  }

}
