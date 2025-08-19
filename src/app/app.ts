import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { LoginComponent } from "./pages/login/login";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer,LoginComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('SoftAdmin');
}
