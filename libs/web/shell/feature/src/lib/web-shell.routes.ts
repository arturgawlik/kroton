import { Route } from '@angular/router';
import { LayoutComponent } from '@kroton/web-shell-ui-layout';
import { WebUnauthorizedLayoutComponent } from '@kroton/web-shell-ui-unauthorized-layout';
import { AuthGuard } from '@auth0/auth0-angular';
import { UnauthorizedGuard } from '@kroton/web/shell/utils/guards/unauthorized-guard';

export const webShellRoutes: Route[] = [
  {
    path: 'app',
    component: LayoutComponent,
    children: [
      {
        path: 'new-feature',
        loadChildren: async () => (await import('@kroton/web/new-feature/feature')).NewFeatureModule
      },
      {
        path: 'work-time',
        loadChildren: async () => (await import('@kroton/web/work-time/feature')).WorkTimeModule
      },
      {
        path: 'tasks',
        loadChildren: async () => (await import('@kroton/web/tasks/feature')).TasksModule
      },
      {
        path: 'team',
        loadChildren: async () => (await import('@kroton/web/team/feature')).TeamModule
      },
      {
        path: '',
        redirectTo: 'work-time',
        pathMatch: 'full'
      }
    ],
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
