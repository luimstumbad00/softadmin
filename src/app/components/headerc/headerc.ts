import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import{AuthService} from '../../services/auth'

@Component({
  selector: 'app-headerc',
  imports: [RouterModule ],
  templateUrl: './headerc.html',
  styleUrl: './headerc.css'
})
export class Headerc {
  constructor(private authService: AuthService) {}

  salir() {
    this.authService.logout();
  }


}
