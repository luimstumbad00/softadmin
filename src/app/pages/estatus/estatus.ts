import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabla, Servicio } from "../../modulos/tabla/tabla";
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-estatus',
  imports: [Tabla, Header, Footer, CommonModule],
  templateUrl: './estatus.html',
  styleUrl: './estatus.css'
})

export class Estatus implements OnInit {
  token: string | null = null;
  ngOnInit() {
    this.token = localStorage.getItem('jwt');
    if (this.token) {
      alert(`Tu JWT es:\n${this.token}`);
    } else {
      alert('No se encontró un JWT válido, inicia sesión de nuevo.');
    }
  } 
  
servicios: Servicio[] = [
  {
    numeroOrden: 101,
    cliente: 'Cliente A',
    tipoServicio: 'Mantenimiento',
    responsable: 'Juan Pérez',
    status: 'En proceso',
    fechaHora: new Date(),
    ultimaNota: 'Revisión pendiente',
    horaInicio: '09:00',
    direccion: 'Av. Reforma 123, CDMX',
    telefonosContacto: ['555-1234', '555-5678'],
    personalResponsable: 'Carlos López',
    equipo: ['Camioneta', 'Escalera'],
    herramientas: ['Multímetro', 'Llave inglesa'],
    personalCuadrilla: ['Pedro', 'Luis'],
    condiciones: 'Acceso restringido al área de máquinas',
    notasAdicionales: 'Cliente solicita revisión extra'
  },
  {
    numeroOrden: 102,
    cliente: 'Cliente B',
    tipoServicio: 'Instalación',
    responsable: 'Ana Gómez',
    status: 'Completado',
    fechaHora: new Date(),
    ultimaNota: 'Entrega exitosa',
    horaInicio: '10:30',
    direccion: 'Calle Juárez 45, CDMX',
    telefonosContacto: ['555-8765'],
    personalResponsable: 'María Hernández',
    equipo: ['Camioneta'],
    herramientas: ['Taladro', 'Martillo'],
    personalCuadrilla: ['José', 'Andrés'],
    condiciones: 'Trabajo finalizado sin contratiempos',
    notasAdicionales: 'Se entregó manual al cliente'
  },
  {
    numeroOrden: 103,
    cliente: 'Cliente B',
    tipoServicio: 'Instalación',
    responsable: 'Ana Gómez',
    status: 'Pendiente',
    fechaHora: new Date(),
    ultimaNota: 'Entrega programada',
    horaInicio: '14:00',
    direccion: 'Calle Hidalgo 67, CDMX',
    telefonosContacto: ['555-3333'],
    personalResponsable: 'Pedro Martínez',
    equipo: ['Camioneta', 'Grúa'],
    herramientas: ['Soldadora', 'Taladro'],
    personalCuadrilla: ['Luis', 'Marco'],
    condiciones: 'Pendiente autorización de acceso',
    notasAdicionales: 'Cliente solicita confirmación antes de inicio'
  },
  {
    numeroOrden: 104,
    cliente: 'Cliente C',
    tipoServicio: 'Instalación',
    responsable: 'Ana Gómez',
    status: 'Completado',
    fechaHora: new Date(),
    ultimaNota: 'Entrega exitosa',
    horaInicio: '11:00',
    direccion: 'Av. Insurgentes 500, CDMX',
    telefonosContacto: ['555-9999'],
    personalResponsable: 'Roberto Sánchez',
    equipo: ['Camioneta'],
    herramientas: ['Brocas', 'Multímetro'],
    personalCuadrilla: ['David', 'Sofía'],
    condiciones: 'Área en remodelación',
    notasAdicionales: 'Se reprogramó una visita adicional'
  },
  {
    numeroOrden: 105,
    cliente: 'Cliente D',
    tipoServicio: 'Instalación',
    responsable: 'Ana Gómez',
    status: 'Cancelado',
    fechaHora: new Date(),
    ultimaNota: 'Cancelación por parte del cliente',
    horaInicio: '08:00',
    direccion: 'Calle Morelos 321, CDMX',
    telefonosContacto: ['555-2222'],
    personalResponsable: 'Laura Ramírez',
    equipo: ['Camioneta'],
    herramientas: ['Llave inglesa'],
    personalCuadrilla: ['Hugo', 'Fernanda'],
    condiciones: 'Cliente canceló previo al inicio',
    notasAdicionales: 'Se requiere confirmar nueva fecha'
  }
];
}
  


