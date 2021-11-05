import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class BasicAuth {
  public url = 'http://localhost:8080/api';

  public getHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa('angularapp' + ':' + '12345')
    });
  }

  public getHeadersLogin() {
    return new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa('angularapp' + ':' + '12345')
    });
  }
}
