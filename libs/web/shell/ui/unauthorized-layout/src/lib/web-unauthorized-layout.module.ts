import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebUnauthorizedLayoutComponent } from './web-unauthorized-layout.component';
import { UnauthorizedTopBarModule } from '@kroton/web/shell/ui/unauthorized-top-bar';
import { UnauthorizedMainViewModule } from '@kroton/web/shell/ui/unauthorized-main-view';
import { FootbarModule } from '@kroton/web/shell/ui/footbar';

@NgModule({
  imports: [CommonModule, UnauthorizedTopBarModule, UnauthorizedMainViewModule, FootbarModule],
  declarations: [WebUnauthorizedLayoutComponent],
  exports: [WebUnauthorizedLayoutComponent]
})
export class WebUnauthorizedLayoutModule {}
