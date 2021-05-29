import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnauthorizedMainViewComponent } from './unauthorized-main-view.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UnauthorizedMainViewComponent],
  exports: [UnauthorizedMainViewComponent]
})
export class UnauthorizedMainViewModule {}
