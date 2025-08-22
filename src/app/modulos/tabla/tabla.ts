import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface Servicio {
  numeroOrden: number;
  cliente: string;
  tipoServicio: string;
  responsable: string;
  status: string;
  fechaHora: Date;
  ultimaNota: string;
}

@Component({
  selector: 'app-tabla',
  imports: [CommonModule],
  templateUrl: './tabla.html',
  styleUrl: './tabla.css'
})
export class Tabla {
  @Input() servicios: Servicio[] = [];

   sortColumn: string = '';
  sortAsc: boolean = true;

  // Método para ordenar datos al dar clic en encabezados
  sortData(column: keyof Servicio) {
    if (this.sortColumn === column) {
      this.sortAsc = !this.sortAsc;
    } else {
      this.sortColumn = column;
      this.sortAsc = true;
    }

    this.servicios.sort((a, b) => {
      let valA = a[column];
      let valB = b[column];

      if (valA instanceof Date && valB instanceof Date) {
        return this.sortAsc
          ? valA.getTime() - valB.getTime()
          : valB.getTime() - valA.getTime();
      }

      valA = valA?.toString().toLowerCase();
      valB = valB?.toString().toLowerCase();

      if (valA < valB) return this.sortAsc ? -1 : 1;
      if (valA > valB) return this.sortAsc ? 1 : -1;
      return 0;
    });
  }

  // Método para asignar clase según status
  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'pendiente': return 'pendiente';
      case 'en proceso':
      case 'proceso': return 'proceso';
      case 'completado': return 'completado';
      case 'cancelado': return 'cancelado';
      default: return '';
    }
  }
}
