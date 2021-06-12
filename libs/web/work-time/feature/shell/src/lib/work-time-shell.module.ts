import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        loadChildren: async () =>
          (await import('@kroton/web/work-time/feature/home')).WorkTimeHomeModule
      }
    ])
  ]
})
export class WorkTimeShellModule {
}
