import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnauthorizedLayoutComponent } from './unauthorized-layout.component';
import { WebShellUiUnauthorizedTopBarModule } from '@kroton/web/shell/ui/unauthorized-top-bar';

@NgModule({
  imports: [CommonModule, WebShellUiUnauthorizedTopBarModule],
  declarations: [UnauthorizedLayoutComponent],
  exports: [UnauthorizedLayoutComponent]
})
export class WebUnauthorizedLayoutModule {}
