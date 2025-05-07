import { Component } from '@angular/core';
import {LoginService} from '../../core/services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  error: boolean = false;
  user : any = {};

  constructor(private loginService: LoginService) { }

  submit(username : string, password : string) : void {

    this.loginService.login(username, password).subscribe({
      next : (response) =>  {
        console.log(response.accessToken);
        this.loginService.getMe(response.accessToken).subscribe(
          (user : any) =>  {
            console.log(user)
            this.user = user
          }
        )
      },
      error : error => {
        this.error = error
      }
    })
  }
}
