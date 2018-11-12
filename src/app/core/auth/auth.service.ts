import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this._loggedIn.asObservable();
  }

  constructor(
    private router: Router
  ) {}

  login(user: any) {
    console.log("login(user: any)", user);

    if (user.userName !== '' && user.password !== '' ) {
      this._loggedIn.next(true);
      this.router.navigate(['/']);
    }
  }

  logout() {
    this._loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
