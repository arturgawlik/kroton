import { Component } from '@angular/core';

@Component({
  selector: 'kroton-layout',
  styles: [`
  `],
  template: `
    <div class="flex flex-col min-h-screen bg-rose-300">
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
