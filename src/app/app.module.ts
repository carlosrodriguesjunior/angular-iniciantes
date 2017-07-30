import { HttpUsuarioService } from './http-usuario.service';
import { MyGuardGuard } from './my-guard.guard';
import { VendasModule } from './vendas/vendas.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { Usuario2Component } from './usuario2/usuario2.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    Usuario2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VendasModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MyGuardGuard, HttpUsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
