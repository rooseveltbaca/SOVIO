import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.component.html',
  styleUrls: ['./recuperar-password.component.css']
})
export class RecuperarPasswordComponent implements OnInit {
  public formResPass = this.formBuilder.group({
    usuarioForm: ['', Validators.required],
    correoForm: ['', Validators.required]
  });
  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
  }

}
