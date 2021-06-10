import { Route } from '@angular/router';
import { LayoutComponent } from '@kroton/web-shell-ui-layout';
import { WebUnauthorizedLayoutComponent } from '@kroton/web-shell-ui-unauthorized-layout';
import { AuthGuard } from '@auth0/auth0-angular';
import { UnauthorizedGuard } from '@kroton/web/shell/utils/guards/unauthorized-guard';

export const webShellRoutes: Route[] = [
  {
    path: 'app',
    component: LayoutComponent,
    // children: [
    //   {
    //     path: '',
    //     loadChildren: async () => (await import('@angular-spotify/web/home/feature')).HomeModule
    //   }
    // ]
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: '',
    component: WebUnauthorizedLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: async () => (await import('@kroton/web/unauthorized-home/feature')).UnauthorizedHome
      },
    ],
    canActivate: [
      UnauthorizedGuard
    ]
  },
  {
    path: '',
    redirectTo: 'collection',
    pathMatch: 'full'
  }
];
