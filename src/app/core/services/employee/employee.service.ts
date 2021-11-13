import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/shared/models/employee';
import { BasicAuth } from '../../authentication/basic-auth';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

constructor(private httpCliente: HttpClient,
  private basicAuth: BasicAuth) { }


  registerEmployee(employee: Employee): Observable<any> {
    const httpHeader = this.basicAuth.getHeaders();
    return this.httpCliente.post(`${this.basicAuth.url}/employee/register`, employee, {headers: httpHeader,});
  }

}
