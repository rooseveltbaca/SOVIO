import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Registro } from '../model/registro.model';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private http: HttpClient) { }
  headers = new HttpHeaders({ 'Content-Type': 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJST0xFX0FDUVVJU0lUSU9OX01BTkFHRU1FTlQiLCJST0xFX1BST0RVQ1RfTUFOQUdFTUVOVCIsIlJPTEVfRU5ST0xMTUVOVCJdLCJzdWIiOiJwcm9kdWN0LW1hbmFnZW1lbnQiLCJpYXQiOjE2MDgzODc5OTksImV4cCI6MTYxODM4Nzk5OX0.GT3kuOrVGcZ1YMYr6RD6RfgIXPhverGDmV-wwi5oCFg'});
   
  getParametersRegister(): Observable<any> {
     return this.http.get<any>(environment.url + '/onboard/parameters');
  }
  getBusquedaXDNI(type,dni): Observable<any> {
    
    return this.http.get(environment.url + '/onboard/persons/document/type/'+type+'/number/'+dni);
  }
  guardarRegistroUser(res: {}): Observable<any> {
    return this.http.post(environment.url + '/onboard/users', res);
  }
  envioCorreoUser(res: {}): Observable<any> {
    return this.http.post(environment.url + '/configurations/send-email', res,
    {headers: this.headers});
  }
}
