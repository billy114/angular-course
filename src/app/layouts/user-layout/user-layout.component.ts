import { Component } from '@angular/core';
import {HeaderUserComponent} from '../../components/user/header-user/header-user.component';
import {FooterUserComponent} from '../../components/user/footer-user/footer-user.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-user-layout',
  standalone: true,
  imports: [
    HeaderUserComponent,
    FooterUserComponent,
    RouterOutlet
  ],
  templateUrl: './user-layout.component.html',
  styleUrl: './user-layout.component.scss'
})
export class UserLayoutComponent {

}
