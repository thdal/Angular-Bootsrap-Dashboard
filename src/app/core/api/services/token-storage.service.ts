import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Token } from '../models/token';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  private subject = new Subject<boolean>();

  constructor(private router: Router) { }

  public signOut(): void {
    window.localStorage.clear();
    this.router.navigate(['/auth/login']);
    this.subject.next(false);
  }

  public saveToken(token: Token): void {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
    this.subject.next(true);
  }

  public getToken(): Token | null {
    const token = window.localStorage.getItem(TOKEN_KEY)
    if (token) 
      return JSON.parse(token);
    return null;
  }

  public getTokenState(): Observable<boolean> {
    return this.subject.asObservable();
  }

}
