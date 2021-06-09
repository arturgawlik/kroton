import { Component } from '@angular/core';

@Component({
  selector: 'kroton-layout',
  styles: [`
    .layout-bg-color {

    }
  `],
  template: `
    <div class="flex flex-col h-screen bg-patterns layout-bg-color">
      <kroton-top-bar></kroton-top-bar>
      <kroton-module-menu></kroton-module-menu>
      <kroton-main-view></kroton-main-view>
      <div class="mt-auto">
        <kroton-footbar></kroton-footbar>
      </div>
    </div>
  `
})
export class LayoutComponent {
}
