import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkTimeComponent } from './work-time.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: WorkTimeComponent
      }
    ])
  ],
  declarations: [WorkTimeComponent]
})
export class WorkTimeModule {
}
