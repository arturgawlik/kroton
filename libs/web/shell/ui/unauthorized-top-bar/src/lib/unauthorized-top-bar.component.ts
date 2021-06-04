import { Component } from '@angular/core';
import { faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'kroton-unauthorized-top-bar',
  template: `
    <div class="w-full shadow-md bg-white fixed top-0">
      <nav class="kroton-max-width mx-auto flex py-2 px-2 items-center">
        <kroton-button routerLink='/' krotonClasses="uppercase tracking-widest border-none">
          kroton
        </kroton-button>
        <div class="ml-auto flex flex-nowrap">
          <kroton-button routerLink='/signin'>
            <span class="hidden sm:inline">Login</span>
            <fa-icon class="sm:hidden" [icon]="faSignInAlt"></fa-icon>
          </kroton-button>
          <kroton-button routerLink='/signup' krotonClasses="ml-2 bg-pink-200">
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
