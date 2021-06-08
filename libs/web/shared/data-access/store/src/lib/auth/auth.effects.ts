import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '@auth0/auth0-angular';
import * as AUTH_ACTIONS from './auth.actions';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {

  login$ = createEffect(() => this.actions$.pipe(
    ofType(AUTH_ACTIONS.login),
    mergeMap(() => this.authService.loginWithPopup()
      .pipe(
        map(() => AUTH_ACTIONS.loginSuccess()),
        catchError(() => of(AUTH_ACTIONS.loginError()))
      )
    )
  ));

  loginRedirect$ = createEffect(() => this.actions$.pipe(
    ofType(AUTH_ACTIONS.loginSuccess),
    tap(() => this.router.navigate(['/app']))
  ), { dispatch: false });

  logout$ = createEffect(() => this.actions$.pipe(
    ofType(AUTH_ACTIONS.logout),
    tap(() => this.authService.logout({
      returnTo: document.location.origin
    }))
  ), { dispatch: false });

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}
