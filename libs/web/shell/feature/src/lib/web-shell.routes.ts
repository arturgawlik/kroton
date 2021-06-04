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
    children: [
      {
        path: '',
        loadChildren: async () => (await import('@kroton/web/unauthorized-home/feature')).UnauthorizedHome
      },
      {
        path: 'signin',
        loadChildren: async () => (await import('@kroton/web/sign-in/feature')).SignInModule
      },
      {
        path: 'signup',
        loadChildren: async () => (await import('@kroton/web/sign-up/feature')).SignUpModule
      },
    ]
  },
  {
    path: '',
    redirectTo: 'collection',
    pathMatch: 'full'
  }
];
