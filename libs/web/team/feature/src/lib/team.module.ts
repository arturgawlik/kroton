import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TeamComponent
      }
    ])
  ],
  declarations: [
    TeamComponent
  ]
})
export class TeamModule {
}
