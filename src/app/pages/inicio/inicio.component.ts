import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InicioService } from 'src/app/service/inicio.service';
import { Evaluacion } from '../../model/evaluacion.model';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  evaluacion: Evaluacion[];
  constructor(private router: Router, private serviceInicio: InicioService) { }

  ngOnInit(): void {
    this.serviceInicio.getEvaluacion().subscribe(data => {
      this.evaluacion = data;
      console.log(this.evaluacion)
    });
  }

  ingresar(evaluacion): void{
    sessionStorage.setItem('tipo', evaluacion);
    this.router.navigate(['/instrucciones']);
  }

}
