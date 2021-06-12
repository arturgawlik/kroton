import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WorkTimeHomeComponent } from './work-time-home.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: WorkTimeHomeComponent
    }])
  ],
  declarations: [WorkTimeHomeComponent]
})
export class WorkTimeHomeModule {
}
