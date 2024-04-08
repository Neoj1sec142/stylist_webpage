import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import { RegisterInput, User } from '../models/user.model';
import { Router } from '@angular/router';
import { AppService } from './app.service';

interface RefreshResponse{
  access?: string, 
  refresh?: string,
  user?: any
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl: string = "";
  private readonly ACCESS_TOKEN_KEY = 'access_token';
    private readonly REFRESH_TOKEN_KEY = 'refresh_token';
    private readonly UID = 'user_id'
    private readonly accessTokenSubject = new BehaviorSubject<string|null>(null);
    public readonly accessToken$ = this.accessTokenSubject.asObservable();
    private readonly currentUserSubject = new BehaviorSubject<User|null>(null);
    public readonly currentUser$ = this.currentUserSubject.asObservable();
  
  constructor(
    private appSvc: AppService,
    private http: HttpClient,
    private router: Router
  ){ 
    this.baseUrl = this.appSvc.getApiUrl() + 'users/';
    const accessToken = localStorage.getItem(this.ACCESS_TOKEN_KEY);
    const user: string | null = localStorage.getItem(this.UID)
    this.accessTokenSubject.next(accessToken);
    if(user) this.currentUserSubject.next(JSON.parse(user));
  }

  public login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}users/login/`, {username, password}).pipe(
    tap((response: any) => {
        console.log(response, 'LOGIN')
        if(response.access_token){
            const {access_token, refresh_token, user} = response;
            this.setTokens(access_token, refresh_token);
            this.setUser(user);
            this.setUserRole(user);
            this.currentUserSubject.next(user)
            this.accessTokenSubject.next(access_token);
            this.router.navigate(['/'])
        }else{
            this.logout()
        }
    })
    );
}

public refreshToken(): Observable<RefreshResponse | null> {
    const url = `${this.baseUrl}refresh/`;
    const refreshToken = this.getRefreshToken();
    if (!refreshToken) {
      return of(null);
    }
    return this.http.post<any>(url, { refresh: refreshToken }).pipe(
      tap(response => {
        this.setTokens(response.access_token, response.refresh_token);
        this.setUser(response.user);
        this.setUserRole(response.user);
        this.currentUserSubject.next(response.user);
      }),
      tap(() => this.accessTokenSubject.next(this.getAccessToken()))
    );
  }

public logout() {
    const url = `${this.baseUrl}logout/`
    
    return this.http.post(url, {refresh_token: this.getRefreshToken()}).subscribe((data: any) => {
        console.log(data, 'LOGOUT')
        localStorage.removeItem(this.ACCESS_TOKEN_KEY);
        localStorage.removeItem(this.REFRESH_TOKEN_KEY);
        this.accessTokenSubject.next(null);
    })
}


public isAuthenticated(): boolean {
    return !!this.getAccessToken();
}

// TOKENS
private setTokens(accessToken: string, refreshToken: string): void {
    localStorage.setItem(this.ACCESS_TOKEN_KEY, accessToken);
    localStorage.setItem(this.REFRESH_TOKEN_KEY, refreshToken);
}

private getAccessToken(): string | null {
    return localStorage.getItem(this.ACCESS_TOKEN_KEY);
}

private getRefreshToken(): string | null {
    return localStorage.getItem(this.REFRESH_TOKEN_KEY);
}

// ID
public getUserRole(): string | null{
    return localStorage.getItem('role')
}
private setUserRole(user: User): void {
    const role = user.is_staff ? (user.is_superuser ? "admin" : "staff") : "user";    
    localStorage.setItem('role', role);
}
public setUser(user: User): void{
    return localStorage.setItem(this.UID, JSON.stringify(user))
}
public removeUser(): void{
    return localStorage.removeItem(this.UID)
}

// CURRENT USER
  public getAuthHeaders(): any {
      const token = this.getAccessToken();
      if (token) {
          let headers = new HttpHeaders({
              'Content-Type': 'application/json',
              Authorization: `JWT ${token}`
          });
          return headers
      } else {
          return new HttpHeaders({
              'Content-Type': 'application/json',
          });
      }
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}/`);
  }
}
