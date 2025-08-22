import { Component } from '@angular/core';
import { Estatus } from "../estatus/estatus";
import { Tarjetas } from "../../modulos/tarjetas/tarjetas";
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-general',
  standalone: true,
  imports: [ Tarjetas, Header, Footer],
  templateUrl: './general.html',
  styleUrl: './general.css'
})
export class General {
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
