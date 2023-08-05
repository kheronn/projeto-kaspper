import { Component } from '@angular/core';
import { LogoComponent } from '../../shared/logo/logo.component';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-footer',
  template: `
    <mat-toolbar class="footer">
      <span>
        <app-logo></app-logo>
      </span>
      <span>
        Desenvolvido em <b>A</b>ngular 16<span class="letra"> ❤ </span> |
        <strong>Prof. Kheronn K. Machado</strong>
      </span>
    </mat-toolbar>
  `,
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [CommonModule, MatToolbarModule, LogoComponent],
})
export class FooterComponent {}
