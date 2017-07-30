import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpUsuarioService {

  constructor(private http: HttpClient) {
   }

   obterUsuarios() {
     return this.http.get('https://demo-gama.herokuapp.com/user');
   }

}
