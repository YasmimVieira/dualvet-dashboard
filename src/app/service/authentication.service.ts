import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User, UserLogin } from '../interfaces/authentication.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly API = 'https://dualvet-api.herokuapp.com/'
  public user!: string | null;
  public token!: string | null;

  constructor(private httpClient: HttpClient) { }

  public setUser(user: string): void {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUser() {
    const userSaved = localStorage.getItem('user');
    if(userSaved) {
      this.user = JSON.parse(userSaved);
      return this.user;
    }
    return null;
  }

  public setToken(token: string): void {
    this.token = token;
    localStorage.setItem('token', token);
  }

  public getToken(): string | null {
    const tokenSaved = localStorage.getItem('token');

    if(tokenSaved) {
      this.token = tokenSaved;
      return this.token;
    }
    return null;
  }

  public isAuthenticate(): boolean {
    return this.getUser() && this.getToken() ? true : false;
  }

  public createUser(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.API}/signup`, user)
    .pipe(
      tap((response) => {
        this.setUser(response.username);
        this.setToken(response.token);
      })
    )
  }

  public loginUser(user: UserLogin): Observable<UserLogin> {
    return this.httpClient.post<UserLogin>(`${this.API}login`, user)
  }
}
