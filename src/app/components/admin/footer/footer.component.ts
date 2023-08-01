import { Component } from '@angular/core';
import { LogoComponent } from "../../shared/logo/logo.component";
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
    selector: 'app-footer',
    template:`
            <mat-toolbar class="footer">
                <span>
                    Desenvolvido em Angular  16 por 
                   <strong>Kheronn K. Machado  </strong> 
                </span>
            </mat-toolbar>    
    `,
    styleUrls: ['./footer.component.scss'],
    standalone: true,
    imports: [CommonModule, MatToolbarModule]
})
export class FooterComponent {

}
