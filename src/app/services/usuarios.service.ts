import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';
 
@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private API_USUARIO = 'http://localhost:8080/usuarios';

  http = inject(HttpClient);
  snackBar = inject(MatSnackBar);


  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.API_USUARIO);
  }

  create(data: Usuario) {
    return this.http.post<Usuario>(this.API_USUARIO, data);
  }

  update(data: Usuario) {
    return this.http.put(this.API_USUARIO, data);
  }

  delete(id: string) {
    return this.http.delete(`${this.API_USUARIO}/${id}`,{responseType: 'text'});
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition:  'center',
      verticalPosition: 'bottom',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }

}
