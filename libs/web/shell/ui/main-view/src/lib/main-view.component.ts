import { Component } from '@angular/core';

@Component({
  selector: 'kroton-main-view',
  template: `
    <div class="w-full">
      <main class="kroton-max-width mx-auto">
        <router-outlet></router-outlet>
      </main>
    </div>
  `
})
export class MainViewComponent {}
