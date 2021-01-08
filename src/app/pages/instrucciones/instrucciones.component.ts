import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Evaluacion } from 'src/app/model/evaluacion.model';
import { InicioService } from 'src/app/service/inicio.service';
import { TestService } from 'src/app/service/test.service';

@Component({
  selector: 'app-instrucciones',
  templateUrl: './instrucciones.component.html',
  styleUrls: ['./instrucciones.component.css']
})
export class InstruccionesComponent implements OnInit {

  instruccion: any;
  titulo: string;
  evaluacion: Evaluacion;
  constructor(
    private router: Router,
    private serviceInicio: InicioService,
    private servicePrueba: TestService) { }

  ngOnInit(): void {
    const tipo = sessionStorage.getItem('tipo');
    sessionStorage.setItem('tipoPrueba', '1');
    sessionStorage.setItem('tipoPruebaCount', '1');
    this.serviceInicio.getEvaluacionId(tipo).subscribe(data => {
      const obj = this.getFilteredByKey(data, 'id', tipo);
      this.titulo = obj[0].title;
      this.instruccion = obj[0].instruccions;
      this.evaluacion = obj[0];
      sessionStorage.setItem('pruebaId', obj[0].id);
    });
  }

  getFilteredByKey(array, key, value): void {
    return array.filter(function(e) {
      return e[key] == value;
    });
  }

  empiezaTest(): void{
    this.router.navigate(['/test']);
  }
}
