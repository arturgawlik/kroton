import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnauthorizedHomeComponent } from './unauthorized-home.component';
import { RouterModule } from '@angular/router';
import { WebSharedButtonModule } from '@kroton/web/shared/ui/button';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UnauthorizedHomeComponent
      }
    ]),
    WebSharedButtonModule
  ],
  declarations: [UnauthorizedHomeComponent],
})
export class UnauthorizedHome {}
