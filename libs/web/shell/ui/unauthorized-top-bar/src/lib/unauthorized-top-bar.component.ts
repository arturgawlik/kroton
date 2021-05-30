import { Component } from '@angular/core';
import { faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'kroton-unauthorized-top-bar',
  template: `
    <div class="w-full shadow-md bg-white">
      <nav class="kroton-max-width mx-auto flex py-2 px-2 items-center">
        <kroton-button krotonClasses="uppercase tracking-widest border-none">
          kroton
        </kroton-button>
        <div class="ml-auto">
          <kroton-button>
            <span class="hidden sm:inline">Login</span>
            <fa-icon class="sm:hidden" [icon]="faSignInAlt"></fa-icon>
          </kroton-button>
          <kroton-button krotonClasses="ml-2 bg-pink-200">
            <span class="hidden sm:inline">Register new account</span>
            <fa-icon class="sm:hidden" [icon]="faUserPlus"></fa-icon>
          </kroton-button>
        </div>
      </nav>
    </div>
  `
})
export class UnauthorizedTopBarComponent {
  faSignInAlt = faSignInAlt;
  faUserPlus = faUserPlus
}
