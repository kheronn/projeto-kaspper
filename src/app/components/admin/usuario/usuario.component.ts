import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from 'src/app/models/usuario.model';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
  ],
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
})
export class UsuarioComponent implements OnInit {
  usuarioService = inject(UsuariosService);
  usuarios: Usuario[] = [];
  colunas: string[] = ['nome', 'email', 'ações'];

  usuario: Usuario = {};

  form!: FormGroup;
  fb = inject(FormBuilder);
  statusLabel: string = 'SALVAR';


  ngOnInit(): void {
    this.carregaUsuarios();
    this.createForm();
  }

  save() {
    if (this.usuario.id) {
      this.usuarioService.update(this.form.value).subscribe(() => {
        this.usuarioService.showMessage('Usuário alterado!');       
      });
    } else {
      this.usuarioService.create(this.form.value).subscribe(() => {
        this.usuarioService.showMessage('Usuário criado');
      });
    }
    this.novoUsuario();
    this.carregaUsuarios();
    
  }

  createForm() {
    this.form = this.fb.group({
      id: [''],
      nome: ['', [Validators.required, Validators.min(5)]],
      email: ['', [Validators.required, Validators.email]],
      dataNascimento:[]
    });
  }

  carregaUsuarios() {
    this.usuarioService
      .getUsuarios()
      .subscribe((dados) => (this.usuarios = dados));
  }

  novoUsuario() {
    this.usuario = {};
    this.form.reset();
    this.statusLabel = 'Salvar';
  }

  editUsuario(usuario: Usuario) {
    this.usuario = usuario;
    this.form.setValue(usuario);
    this.statusLabel = 'Alterar';
  }


  deleteUsuario(id: string) {
    Swal.fire({
      title: 'Confirma a exclusão do usuário?',
      text: 'Essa ação é irreversível!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não',
    }).then((result) => {
      if (result.isConfirmed) {
        this.usuarioService.delete(id).subscribe(() => {
          Swal.fire('Excluído!', 'O usuário foi excluído.', 'success');
          this.carregaUsuarios();
        });
      }
    });
  }

}
