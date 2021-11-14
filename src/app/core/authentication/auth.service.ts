import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/shared/models/employee';
import { BasicAuth } from './basic-auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _employee: Employee;
  private _token: string;

  constructor(private httpCliente: HttpClient, private basicAuth: BasicAuth, private router: Router) {}

  public get employee(): Employee {
    if (this._employee != null) {
      return this._employee;
    } else if (
      this._employee == null &&
      sessionStorage.getItem('employee') != null
    ) {
      this._employee = JSON.parse(
        sessionStorage.getItem('employee')
      ) as Employee;
      return this._employee;
    }
    return new Employee();
  }

  public get token(): string {
    if (this._token != null) {
      return this._token;
    } else if (this._token == null && sessionStorage.getItem('token') != null) {
      this._token = sessionStorage.getItem('token');
      return this._token;
    }
    return null;
  }

  //El post para realizar el login
  login(employee: Employee): Observable<any> {
    //Datos para realizar el login en back
    const urlEndPoint = 'http://localhost:8080/oauth/token';

    const httpHeader = this.basicAuth.getHeadersLogin();

    //Enviar parametros para la autenticación
    let params = new URLSearchParams();
    params.set('grant_type', 'password');
    params.set('username', employee.username);
    params.set('password', employee.password);

    return this.httpCliente.post(urlEndPoint, params.toString(), {
      headers: httpHeader,
    });
  }

  guardarUsuario(accessToken: string): void {
    let payload = this.getEmployeeData(accessToken);
    this._employee = new Employee();
    //Guardar datos del usuario
    this._employee.username = payload.user_name;
    this._employee.roles = payload.authorities;

    //Save Employee data in localStorage
    sessionStorage.setItem('employee', JSON.stringify(this._employee));
  }

  guardarToken(accessToken: string) {
    this._token = accessToken;
    sessionStorage.setItem('token', JSON.stringify(accessToken));
  }

  getEmployeeData(accessToken: string): any {
    if (accessToken != null) {
      return JSON.parse(atob(accessToken.split('.')[1]));
    }
    return null;
  }

  isAuthenticated(): boolean {
    let payload = this.getEmployeeData(this.token);
    if (payload != null && payload.user_name && payload.user_name.length > 0) {
      return true;
    }
    return false;
  }

  logout(): void {
    this._employee = null;
    this._token = null;
    sessionStorage.clear();
    this.router.navigate(['login']);
  }

}
