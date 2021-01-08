import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  valusert : string;
  title = 'sovio';
  menuDisplay = true;
  menu = [
    {
      tipo: 'btn',
      nombre: 'INTRANET',
      route: ''
    }
  ];
  logeado = '0';

  constructor(
    private loginService: LoginService,
    private router: Router) {
    }

  ngOnInit(): void {
    this.loginService.usuarioObservable.subscribe(data => {
      sessionStorage.setItem('username', data.username);
      this.menu = [
        {
          tipo: 'text',
          nombre: data.username,
          route: ''
        }
      ];
      this.logeado = '1';
    });
    this.logeado = sessionStorage.getItem('usuario');
    if (this.logeado && this.logeado !== '0') {
      this.menu = [
        {
          tipo: 'text',
          nombre: sessionStorage.getItem('username'),
          route: ''
        },
      ];
    } else {
      this.menu = [
        {
          tipo: 'btn',
          nombre: 'INTRANET',
          route: ''
        },
      ];
    }
    console.log(this.logeado);
  }

  salir(): void{
    sessionStorage.setItem('usuario', '0');
    this.logeado = '0';
    this.router.navigate(['/']);
    this.menu = [
      {
        tipo: 'text',
        nombre: 'INTRANET',
        route: ''
      }
    ];
  }

}
