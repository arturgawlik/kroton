import { Route } from '@angular/router';
import { LayoutComponent } from '@kroton/web-shell-ui-layout';
import { WebUnauthorizedLayoutComponent } from '@kroton/web-shell-ui-unauthorized-layout';

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
  },
  {
    path: '',
    component: WebUnauthorizedLayoutComponent,
    // children: [
    //   {
    //     path: '',
    //     loadChildren: async () => (await import('@angular-spotify/web/home/feature')).HomeModule
    //   }
    // ]
  },
  {
    path: '',
    redirectTo: 'collection',
    pathMatch: 'full'
  }
];
