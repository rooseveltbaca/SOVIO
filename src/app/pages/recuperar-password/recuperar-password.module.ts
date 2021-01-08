import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecuperarPasswordRoutingModule } from './recuperar-password-routing.module';
import { RecuperarPasswordComponent } from './recuperar-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatSelectModule } from '@angular/material/select';
import { NgxCaptchaModule } from 'ngx-captcha';
@NgModule({
  declarations: [RecuperarPasswordComponent],
  imports: [
    CommonModule,
    RecuperarPasswordRoutingModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    ScrollingModule,
    MatSelectModule,
    NgxCaptchaModule
  ]
})
export class RecuperarPasswordModule { }
