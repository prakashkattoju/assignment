import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { IconsModule } from '../icon.module';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgbDropdownModule, IconsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

}
