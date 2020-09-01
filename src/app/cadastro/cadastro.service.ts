import { Usuario } from './usuario.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ServiceNameService {
  constructor(private httpClient: HttpClient) { }

}

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private readonly API = 'http://localhost:3000/usuarios'

  constructor(private http: HttpClient) { }

  create(usuario): Observable<any> {
    return this.http.post(this.API, usuario)
  }
}
