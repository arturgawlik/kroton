import { Component } from '@angular/core';

@Component({
  selector: 'kroton-layout',
  template: `
    <div class="flex flex-col h-screen bg-patterns">
      <kroton-top-bar></kroton-top-bar>
      <kroton-main-view></kroton-main-view>
      <div class="mt-auto">
        <kroton-footbar></kroton-footbar>
      </div>
    </div>
  `
})
export class LayoutComponent {
}
