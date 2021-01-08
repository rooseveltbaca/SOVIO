import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstruccionesRoutingModule } from './instrucciones-routing.module';
import { InstruccionesComponent } from './instrucciones.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [InstruccionesComponent],
  imports: [
    CommonModule,
    InstruccionesRoutingModule,
    MatButtonModule
  ]
})
export class InstruccionesModule { }
