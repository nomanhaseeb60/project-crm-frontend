import { Component, DoCheck } from '@angular/core';
import { AuthService } from './core/authentication/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements DoCheck {
  title = 'front-project-management';
  isLogged: boolean;

  constructor(private authService: AuthService) {}

  ngDoCheck(): void {
    this.loggedIn();
  }

  loggedIn(): boolean {
    this.isLogged = this.authService.isAuthenticated();
    return this.isLogged;
  }
}
