import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnauthorizedTopBarComponent } from './unauthorized-top-bar.component';
import { WebSharedButtonModule } from '@kroton/web/shared/ui/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [CommonModule, WebSharedButtonModule, FontAwesomeModule],
  declarations: [UnauthorizedTopBarComponent],
  exports: [UnauthorizedTopBarComponent]
})
export class UnauthorizedTopBarModule {}
