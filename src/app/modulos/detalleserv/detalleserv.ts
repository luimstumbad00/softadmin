import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { Servicio } from '../tabla/tabla'; // importa tu interfaz
import { MatDividerModule } from '@angular/material/divider'; 
@Component({
  selector: 'app-detalleserv',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatDividerModule],
  templateUrl: './detalleserv.html',
  styleUrl: './detalleserv.css'
})
export class Detalleserv {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Servicio) {}

}
