import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prueba } from '../model/prueba.model';
import { environment } from 'src/environments/environment';
import { Pregunta } from '../model/pregunta.model';
import { Respuesta } from '../model/respuesta.model';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  token = sessionStorage.getItem('token');

  constructor(private http: HttpClient) { }

  getPrueba(prueba: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json',
    Authorization: this.token});
    return this.http.get<any>(environment.url + '/evaluations/struct/' + prueba, {headers});
  }

  getPregunta(pregunta: Pregunta): Observable<Pregunta[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json',
    Authorization: this.token});
    return this.http.post<Pregunta[]>(environment.url + '/pregunta/buscarPorPruebaId',
    pregunta, {headers});
  }

  getRespuesta(respuesta: Respuesta): Observable<Respuesta[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json',
    Authorization: this.token});
    return this.http.post<Respuesta[]>(environment.url + '/respuesta/buscarPorPreguntaId',
    respuesta, {headers});
  }

  getPruebaOrden(prueba: Prueba): Observable<Prueba[]>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json',
    Authorization: this.token});
    return this.http.post<Prueba[]>(environment.url + '/prueba/buscarPorEvaluacionIdYOrden',
    prueba, {headers});
  }

  getPruebaEvaliacion(prueba: Prueba): Observable<Prueba[]>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json',
    Authorization: this.token});
    return this.http.post<Prueba[]>(environment.url + '/prueba/buscarPorEvaluacionId',
    prueba, {headers});
  }

  saveMarcado(pregunta, respuesta){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json',
    Authorization: this.token});
    return this.http.put<Prueba[]>(environment.url + '/questions/' + pregunta + '/answer/' + respuesta, {headers}, {headers});
  }
}
