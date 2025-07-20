import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Login } from "./components/login/login";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Header, Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('softadmin');
}
