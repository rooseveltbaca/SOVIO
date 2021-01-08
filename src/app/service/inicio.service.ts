import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evaluacion } from '../model/evaluacion.model';

import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  token = 'Bearer ' + sessionStorage.getItem('token');
  headers = new HttpHeaders({ 'Content-Type': 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJST0xFX0FDUVVJU0lUSU9OX01BTkFHRU1FTlQiLCJST0xFX1BST0RVQ1RfTUFOQUdFTUVOVCIsIlJPTEVfRU5ST0xMTUVOVCJdLCJzdWIiOiJwcm9kdWN0LW1hbmFnZW1lbnQiLCJpYXQiOjE2MDgzODc5OTksImV4cCI6MTYxODM4Nzk5OX0.GT3kuOrVGcZ1YMYr6RD6RfgIXPhverGDmV-wwi5oCFg'});
   
  constructor(private http: HttpClient) { }

  getEvaluacion(): Observable<Evaluacion[]> {
    return this.http.get<Evaluacion[]>(environment.url + '/evaluations', {headers: this.headers});
   
  }

  getEvaluacionId(id): Observable<Evaluacion[]>{
    return this.http.get<Evaluacion[]>(environment.url + '/evaluations', {headers: this.headers});
  }
  
}
