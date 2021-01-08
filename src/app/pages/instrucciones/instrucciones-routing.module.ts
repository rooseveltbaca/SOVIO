import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstruccionesComponent } from './instrucciones.component';

const routes: Routes = [
  { path: '', component: InstruccionesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstruccionesRoutingModule { }
