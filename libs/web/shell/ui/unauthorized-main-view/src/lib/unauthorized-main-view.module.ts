import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnauthorizedMainViewComponent } from './unauthorized-main-view.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [UnauthorizedMainViewComponent],
  exports: [UnauthorizedMainViewComponent]
})
export class UnauthorizedMainViewModule {}
