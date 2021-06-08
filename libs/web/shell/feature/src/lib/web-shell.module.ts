import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { webShellRoutes } from './web-shell.routes';
import { AuthModule } from '@auth0/auth0-angular';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { extModules } from './build-specyfics';
import { AuthEffects } from '@kroton//web/shared/data-access/store';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(webShellRoutes, {
      scrollPositionRestoration: 'top',
    }),
    AuthModule.forRoot({
      domain: 'dev-6zd7u8el.eu.auth0.com',
      clientId: 'VYr4gTvPD9bv4Rzyw8br8y5sbDH42kiU',
    }),
    StoreModule.forRoot([]),
    EffectsModule.forRoot([
      AuthEffects
    ]),
    ...extModules,
  ],
  exports: [RouterModule],
})
export class WebShellModule {}
