import { Component } from '@angular/core';
import { Tabla } from "../../modulos/tabla/tabla";
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-estatus',
  imports: [Tabla,],
  templateUrl: './estatus.html',
  styleUrl: './estatus.css'
})
export class Estatus {

}
