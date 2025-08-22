import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import{Tarjetas} from "../../modulos/tarjetas/tarjetas";
import { Headerc } from "../../components/headerc/headerc";

@Component({
  selector: 'app-generalc',
  imports: [ Footer, Tarjetas, Headerc],
  templateUrl: './generalc.html',
  styleUrl: './generalc.css'
})
export class Generalc {
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
