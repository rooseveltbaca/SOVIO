import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('src/app/pages/login/login.module').then(m => m.LoginModule)},
  { path: 'registro', loadChildren: () => import('src/app/pages/registro/registro.module').then(m => m.RegistroModule)},
  { path: 'inicio', loadChildren: () => import('src/app/pages/inicio/inicio.module').then(m => m.InicioModule)},
  { path: 'instrucciones', loadChildren: () => import('src/app/pages/instrucciones/instrucciones.module').then(m => m.InstruccionesModule)},
  { path: 'respass', loadChildren: () =>
  import('src/app/pages/recuperar-password/recuperar-password.module').then(m => m.RecuperarPasswordModule)},
  { path: 'test', loadChildren: () => import('src/app/pages/test/test.module').then(m => m.TestModule)},
  { path: 'prueba', loadChildren: () => import('src/app/pages/prueba/prueba.module').then(m => m.PruebaModule)},
  { path: 'informe', loadChildren: () => import('src/app/pages/informe-confidencial/informe-confidencial.module')
  .then(m => m.InformeConfidencialModule)},
  { path: 'dashboard', loadChildren: () => import('src/app/pages/dashboard/dashboard.module').then(m => m.DashboardModule)},
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
