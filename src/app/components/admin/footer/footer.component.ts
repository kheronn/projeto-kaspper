import { Component } from '@angular/core';
import { LogoComponent } from "../../shared/logo/logo.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    standalone: true,
    imports: [CommonModule]
})
export class FooterComponent {

}
