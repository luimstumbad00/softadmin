import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import {Detalleserv} from '../detalleserv/detalleserv' 
export interface Servicio {
  numeroOrden: number;
  cliente: string;
  tipoServicio: string;
  responsable: string;
  status: string;
  fechaHora: Date;
  ultimaNota: string;
  //-----------------CAMPOS ADICONALES PARA DETALLE DE ORDEN 
  
  // Nuevos campos para el detalle
  horaInicio: string;
  direccion: string;
  telefonosContacto: string[];
  personalResponsable: string;
  equipo: string[];
  herramientas: string[];
  personalCuadrilla: string[];
  condiciones: string;
  notasAdicionales: string;
}

@Component({
  selector: 'app-tabla',
  imports: [CommonModule, MatDialogModule],
  templateUrl: './tabla.html',
  styleUrl: './tabla.css'
})
export class Tabla {
  @Input() servicios: Servicio[] = [];

   sortColumn: string = '';
  sortAsc: boolean = true;

  // Metodo para abrur mas a detalle cada orden
  constructor(private dialog: MatDialog) {}

abrirDetalle(servicio: Servicio) {
  this.dialog.open(Detalleserv, {
    data: servicio,
    width: '400px'
  });
}

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
