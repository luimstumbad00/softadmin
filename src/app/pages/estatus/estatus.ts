import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabla } from "../../modulos/tabla/tabla";
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
    
  }
  


