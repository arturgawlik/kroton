import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WorkTimeHomeComponent } from './work-time-home.component';
import { KrotonWorkTimeNotesModule } from '@kroton/web/work-time/ui/notes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: WorkTimeHomeComponent
    }]),
    KrotonWorkTimeNotesModule
  ],
  declarations: [WorkTimeHomeComponent]
})
export class WorkTimeHomeModule {
}
