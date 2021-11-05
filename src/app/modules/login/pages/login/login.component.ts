import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { Employee } from 'src/app/shared/models/employee';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loginInvalid: boolean;
  employee: Employee;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      let employee = this.authService.employee;
      Swal.fire(
        'Login',
        `${employee.username.split('@')[0]}, you are authenticated!`,
        'info'
      );
      this.router.navigate(['/dashboard']);
    }
    this.form = this.fb.group({
      username: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
    });
  }

  login(): void {
    if (
      this.form.get('username') == null ||
      this.form.get('password') == null
    ) {
      Swal.fire(
        'Error Login',
        'Error username and password are mandatory fields',
        'error'
      );
      return;
    }

    this.employee = new Employee();
    this.employee.username = this.form.get('username').value;
    this.employee.password = this.form.get('password').value;

    this.authService.login(this.employee).subscribe(
      (response) => {
        this.router.navigate(['/dashboard']);
        this.authService.guardarUsuario(response.access_token);
        this.authService.guardarToken(response.access_token);
        let employee = this.authService.employee;
        Swal.fire(
          'Login',
          `Welcome ${employee.username}, login sucessfully`,
          'success'
        );
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        if (error.status == 400) {
          Swal.fire('Error Login', `User or password are incorrect`, 'error');
        }
      }
    );
  }

}
