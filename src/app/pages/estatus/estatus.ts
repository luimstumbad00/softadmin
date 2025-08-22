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
      ultimaNota: 'Revisión pendiente'
    },
    {
      numeroOrden: 102,
      cliente: 'Cliente B',
      tipoServicio: 'Instalación',
      responsable: 'Ana Gómez',
      status: 'Completado',
      fechaHora: new Date(),
      ultimaNota: 'Entrega exitosa'
    },
    {
      numeroOrden: 103,
      cliente: 'Cliente B',
      tipoServicio: 'Instalación',
      responsable: 'Ana Gómez',
      status: 'Pendiente',
      fechaHora: new Date(),
      ultimaNota: 'Entrega exitosa'
    },
    {
      numeroOrden: 104,
      cliente: 'Cliente C',
      tipoServicio: 'Instalación',
      responsable: 'Ana Gómez',
      status: 'Completado',
      fechaHora: new Date(),
      ultimaNota: 'Entrega exitosa'
    },
    {
      numeroOrden: 105,
      cliente: 'Cliente D',
      tipoServicio: 'Instalación',
      responsable: 'Ana Gómez',
      status: 'Cancelado',
      fechaHora: new Date(),
      ultimaNota: 'Entrega exitosa'
    }
  ];
}
  


