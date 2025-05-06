import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgClass, NgStyle} from '@angular/common';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [
    FormsModule,
    NgClass,
    NgStyle
  ],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {
  message : string = 'Hello World!';
  selectedColor : string = '';
  colors : string[] = ['red', 'green', 'blue'];

  theme : string = 'dark';
  setTheme(value : string) : void  {
    this.theme = value
  }

  getColor () : string {
    if (this.theme === 'dark') {
      return 'white';
    }else if (this.theme === 'light') {
      return 'black';
    }
    return '';
  }

  getBackgroundColor () : string {
    if (this.theme === 'dark') {
      return 'black';
    }else if (this.theme === 'light') {
      return 'white';
    }
    return '';
  }
  getDynamicStyles() {
    return {
      'background': this.theme === 'dark'
        ? 'linear-gradient(145deg, #1a1a1a, #2d2d2d)'
        : 'linear-gradient(145deg, #ffffff, #f8f9fa)',
      'color': this.theme === 'dark' ? '#e9ecef' : '#212529',
      'border': `2px solid ${this.theme === 'dark' ? '#343a40' : '#ced4da'}`,
      'box-shadow': this.theme === 'dark'
        ? '3px 3px 6px #1a1a1a, -3px -3px 6px #2d2d2d'
        : '3px 3px 6px #d9d9d9, -3px -3px 6px #ffffff',
      'font-size': '1.1em',
      'letter-spacing': '0.05em',
      'transition': 'all 0.3s ease'
    };
  }
  
  students : any [] = [
    {id : 1, name:"John", email:"john@example.com"},
    {id : 2, name:"James", email:"james@example.com"},
    {id : 3, name:"Joseph", email:"joseph@example.com"},
  ]

    projects : any [] = [{
    id: 1,
    image: 'assets/images/companies/img-1.png',
    text: 'New admin Design',
    subtext: 'It will be as simple as Occidental',
    users: ['assets/images/users/avatar-2.jpg', 'assets/images/users/avatar-1.jpg'],
    status: 'Completed',
    date: '15 Oct, 19',
    comment: 214
  },
    {
      id: 2,
      image: 'assets/images/companies/img-2.png',
      text: 'Brand logo design',
      subtext: 'To achieve it would be necessary',
      users: ['assets/images/users/avatar-3.jpg'],
      status: 'Pending',
      date: '22 Oct, 19',
      comment: 183
    },
    {
      id: 3,
      image: 'assets/images/companies/img-3.png',
      text: 'New Landing Design',
      subtext: 'For science, music, sport, etc',
      users: ['assets/images/users/avatar-5.jpg', 'assets/images/users/avatar-4.jpg'],
      status: 'Delay',
      date: '13 Oct, 19',
      comment: 175
    },
    {
      id: 4,
      image: 'assets/images/companies/img-4.png',
      text: 'Redesign - Landing page',
      subtext: 'If several languages coalesce',
      users: ['assets/images/users/avatar-6.jpg','assets/images/users/avatar-4.jpg','assets/images/users/avatar-3.jpg'],
      status: 'Completed',
      date: '14 Oct, 19',
      comment: 202
    }
    ]
}
