import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Login } from 'src/app/model/login.model';
import { LoginService } from 'src/app/service/login.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  public usuario: Login;
  spinner = false;
  hide = true;
  user: string;
  password: string;

  public loginAdmin = this.formBuilder.group({
    usuarioForm: ['', Validators.required],
    passwordForm: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder,
    // public dialog: MatDialog,
    private router: Router,
    private loginService: LoginService,
    public dialogAdmin: MatDialogRef<LoginAdminComponent>,) { }

  ngOnInit(): void {
  }

  validaLogin(): void{
    this.loginService.registroUsuario({username: 'Gian carlos'});
    this.dialogAdmin.close();
    sessionStorage.setItem('usuario', '1');
    this.router.navigate(['/dashboard']);
    /*const user = {
      username: this.loginAdmin.get('usuarioForm').value,
      password: this.loginAdmin.get('passwordForm').value
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
        this.router.navigate(['/dashboard']);
      }, 1000);
    }, err => {
      console.log(err);
      this.spinner = false;
      swal.fire(
        'Mensaje informativo',
        'Usuario y/o contraseña son incorrectos.',
        'error'
      );
    });*/
  }
}
