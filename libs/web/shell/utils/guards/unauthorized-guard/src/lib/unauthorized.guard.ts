import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UnauthorizedGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate() {
    return this.authService.isAuthenticated$
      .pipe(
        map(isAuthenticated => {
          if (isAuthenticated)
            return this.router.parseUrl('/app')
          return true;
        })
      );
  }
}
