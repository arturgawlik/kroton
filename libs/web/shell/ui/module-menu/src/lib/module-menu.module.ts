import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModuleMenuComponent } from './module-menu.component';
import { WebSharedButtonModule } from '@kroton/web/shared/ui/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [CommonModule, RouterModule, WebSharedButtonModule, FontAwesomeModule],
  declarations: [ModuleMenuComponent],
  exports: [ModuleMenuComponent]
})
export class ModuleMenuModule {
}
