import { HttpUsuarioService } from './../http-usuario.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios = this.httpUsuario.obterUsuarios();
  name = 'Carlao';

  constructor(private httpUsuario: HttpUsuarioService) {
  }

  meuMetodo(event) {
    console.log(event);
  }

  ngOnInit() {
  }

}
