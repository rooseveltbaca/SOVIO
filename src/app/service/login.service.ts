import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Login } from '../model/login.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private usuarioSubject = new Subject<Login>();
  usuarioObservable = this.usuarioSubject.asObservable();
  constructor(private http: HttpClient) { }

  registroUsuario(usuario: Login): void {
    this.usuarioSubject.next(usuario);
  }

  validaLogin(usuario: Login): Observable<string> {
    const headers = { 'content-type': 'application/json'};
    return this.http.post<string>(environment.url + '/auth/login', usuario,
    {headers, responseType: 'text' as 'json'});
  }
}
