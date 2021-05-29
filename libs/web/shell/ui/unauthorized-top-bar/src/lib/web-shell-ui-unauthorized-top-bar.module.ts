import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnauthorizedTopBarComponent } from './unauthorized-top-bar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UnauthorizedTopBarComponent],
  exports: [UnauthorizedTopBarComponent]
})
export class WebShellUiUnauthorizedTopBarModule {}
