import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformeConfidencialRoutingModule } from './informe-confidencial-routing.module';
import { InformeConfidencialComponent } from './informe-confidencial.component';

@NgModule({
  declarations: [InformeConfidencialComponent],
  imports: [
    CommonModule,
    InformeConfidencialRoutingModule
  ]
})
export class InformeConfidencialModule { }
