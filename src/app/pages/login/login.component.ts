import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Login } from 'src/app/model/login.model';
import { LoginService } from 'src/app/service/login.service';
import { RegistroComponent } from '../registro/registro.component';
import swal from 'sweetalert2';
import { LoginAdminComponent } from '../login-admin/login-admin.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  spinner = false;
  hide = true;
  siteKey = '6Lck0wgaAAAAACnxRkIlBN67vOAx2a9KaIXHxGIZ';
  public usuario: Login;
  public formLogin = this.formBuilder.group({
    usuarioForm: ['', Validators.required],
    passwordForm: ['', Validators.required],
    recaptcha: ['', Validators.required]
  });
  /*
  public formRegistro = this.formBuilder.group({
    tipoDocForm: ['', Validators.required],
    documentoForm: ['', Validators.required],
  });
  */
  constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private router: Router,
    private loginService: LoginService,
  ) { }

  ngOnInit(): void {
  }

  openDialog(): any {
    const dialogRef = this.dialog.open(RegistroComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  validaLogin(): any{
    this.spinner = true;
    const user = {
      username: this.formLogin.get('usuarioForm').value,
      password: this.formLogin.get('passwordForm').value
    };
    this.loginService.validaLogin(user).subscribe(data => {
      this.usuario = JSON.parse(data);
      setTimeout(() => {
        // const res = data.split(' ');
        sessionStorage.setItem('token', 'Bearer ' + this.usuario.token);
        // sessionStorage.setItem('token', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJST0xFX0FDUVVJU0lUSU9OX01BTkFHRU1FTlQiLCJST0xFX1BST0RVQ1RfTUFOQUdFTUVOVCIsIlJPTEVfRU5ST0xMTUVOVCJdLCJzdWIiOiJwcm9kdWN0LW1hbmFnZW1lbnQiLCJpYXQiOjE2MDgzODc5OTksImV4cCI6MTYxODM4Nzk5OX0.GT3kuOrVGcZ1YMYr6RD6RfgIXPhverGDmV-wwi5oCFg');
        this.loginService.registroUsuario({username: this.usuario.firstName + '' + this.usuario.lastName});
        this.spinner = false;
        sessionStorage.setItem('usuario', '1');
        this.router.navigate(['/inicio']);
      }, 1000);
    }, err => {
      console.log(err);
      this.spinner = false;
      swal.fire(
        'Mensaje informativo',
        'Usuario y/o contraseña son incorrectos.',
        'error'
      );
    });
  }

  loginAdmin(): any{
    const dialogAdmin = this.dialog.open(LoginAdminComponent,
      {
        height: '40%',
        width: '30%',
      });
    dialogAdmin.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
