import { Injectable, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Nova abordagem para Injeção de dependências
  router = inject(Router);

  // private loggedIn: BehaviorSubject<boolean>
  // Usando reatividade com signal
  loggedIn = signal(false);

  

  get isLoggedIn(): boolean {
    return this.loggedIn();
  }

  login(user: UserModel): void {
    // setar o usuario no localstorage
    localStorage.setItem('user', JSON.stringify(user));
    this.loggedIn.update((value) => (value = true));
    this.router.navigate(['/']);
  }

  logout(): void {
    localStorage.removeItem('user');
    this.loggedIn.update((value) => value = false);
    this.router.navigate(['/login']);
  }
}
