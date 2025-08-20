import { Component } from '@angular/core';
import { Estatus } from "../estatus/estatus";
import { Tarjetas } from "../../modulos/tarjetas/tarjetas";

@Component({
  selector: 'app-general',
  standalone: true,
  imports: [Estatus, Tarjetas],
  templateUrl: './general.html',
  styleUrl: './general.css'
})
export class General {

}
