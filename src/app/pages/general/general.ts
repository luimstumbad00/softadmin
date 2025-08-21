import { Component } from '@angular/core';
import { Estatus } from "../estatus/estatus";
import { Tarjetas } from "../../modulos/tarjetas/tarjetas";
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-general',
  standalone: true,
  imports: [Estatus, Tarjetas, Header, Footer],
  templateUrl: './general.html',
  styleUrl: './general.css'
})
export class General {

}
