import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InformeConfidencialComponent } from './informe-confidencial.component';

const routes: Routes = [
  { path: '', component: InformeConfidencialComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformeConfidencialRoutingModule { }
