import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl: string = 'https://dummyjson.com/auth/'
  constructor(private http : HttpClient) { }

  login (username : string, password : string) : Observable<any> {
    let body = {
      username : username,
      password : password
    };

    return this.http.post(
      `${this.apiUrl}/login`,
      body
    )
  }

  getMe (accessToken : string) : Observable<any> {
    let headers = new HttpHeaders({ Authorization: `Bearer ${accessToken}` });

    return this.http.get(`${this.apiUrl}/me` , {headers})
  }
}
