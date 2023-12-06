import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly isLoggedIn = new BehaviorSubject<boolean>(false);
  // static isAuthenticated$: any;

  isAuthenticated$(): Observable<boolean> {
    return this.isLoggedIn;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn.value
  }

  login(
    user: Partial<{ user: string | null; password: string | null }>
  ): Observable<boolean> {
    if (user.user == 'admin' && user.password == 'admin') {
      this.isLoggedIn.next(true);
    }
    return this.isLoggedIn.asObservable();
  }

  logout() {
    this.isLoggedIn.next(false);
  }
}
