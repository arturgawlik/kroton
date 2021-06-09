import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { TopBarModule } from '@kroton/web/shell/ui/top-bar';
import { FootbarModule } from '@kroton/web/shell/ui/footbar';
import { MainViewModule } from '@kroton/web/shell/ui/main-view';
import { ModuleMenuModule } from '@kroton//web/shell/ui/module-menu';

@NgModule({
  imports: [CommonModule, TopBarModule, FootbarModule, MainViewModule, ModuleMenuModule],
  declarations: [LayoutComponent],
  exports: [LayoutComponent]
})
export class WebLayoutModule {}
