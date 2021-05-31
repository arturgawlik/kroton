import { Component } from '@angular/core';

@Component({
  selector: 'kroton-unauthorized-layout',
  template: `
    <div class="flex flex-col h-screen bg-patterns">
      <kroton-unauthorized-top-bar></kroton-unauthorized-top-bar>
      <kroton-unauthorized-main-view></kroton-unauthorized-main-view>
      <div class="mt-auto">
        <kroton-footbar></kroton-footbar>
      </div>
    </div>
  `,
  styles:[`
    .bg-patterns {
      background-image: url('/assets/patterns.svg');
    }
  `]
})
export class WebUnauthorizedLayoutComponent {
}
