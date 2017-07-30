import { MyGuardGuard } from './my-guard.guard';
import { HomeComponent } from './vendas/home/home.component';
import { Usuario2Component } from './usuario2/usuario2.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    canActivate: [MyGuardGuard],
    children: [
      {
        path: 'usuario',
        component: UsuarioComponent,
      },
      {
        path: 'usuario2',
        component: Usuario2Component
      },
      {
        path: 'vendas',
        component: HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
