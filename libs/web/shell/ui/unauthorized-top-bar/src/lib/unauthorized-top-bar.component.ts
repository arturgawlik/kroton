import { Component } from '@angular/core';

@Component({
  selector: 'kroton-unauthorized-top-bar',
  template: `
    <div class="w-full shadow-md">
      <nav style='max-width: 1600px' class="mx-auto flex py-2 px-2 items-center">
        <button matRipple class="uppercase tracking-widest rounded  px-4">
          kroton
        </button>
        <div class="ml-auto">
          <button matRipple class="px-4 rounded border border-black">
            Login
          </button>
          <button matRipple class="ml-2 bg-pink-200  px-4 rounded border border-black">
            Register new account
          </button>
        </div>
      </nav>
    </div>
  `
})
export class UnauthorizedTopBarComponent {
}
