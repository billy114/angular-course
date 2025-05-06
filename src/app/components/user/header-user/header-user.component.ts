import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-header-user',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './header-user.component.html',
  styleUrl: './header-user.component.scss'
})
export class HeaderUserComponent {

}
