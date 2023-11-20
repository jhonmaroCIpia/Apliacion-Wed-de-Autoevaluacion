import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private urlApp: string;
  private urlApi: string;


  constructor(private http: HttpClient) { 
    this.urlApp = environment.endpoint;
    this.urlApi = 'api/usuarios/';
  }

  getUsuarios(): Observable<Usuario[]>{
    console.log(this.http.get<Usuario[]>(this.urlApp + this.urlApi));
    return this.http.get<Usuario[]>(this.urlApp + this.urlApi);
  }

  getUsuario(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(this.urlApp + this.urlApi + id);
  }
  
  deleteUsuario(id: number): Observable<void>{
    return this.http.delete<void>(this.urlApp + this.urlApi + id);
  }

  saveUsuario(usuario: any): Observable<void>{
    return this.http.post<void>(this.urlApp + this.urlApi, usuario);
  }

  updateUsuario(id: number, usuario: any): Observable<void>{
    return this.http.put<void>(this.urlApp + this.urlApi + id, usuario);
  }

}
