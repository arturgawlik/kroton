import { Component } from '@angular/core';
import { faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { login } from '@kroton//web/shared/data-access/store';

@Component({
  selector: 'kroton-unauthorized-top-bar',
  template: `
    <div class="w-full shadow-md bg-white fixed t op-0">
      <nav class="kroton-max-width mx-auto flex py-2 px-2 items-center">
        <kroton-button routerLink='/' krotonClasses="uppercase tracking-widest border-none">
          kroton
        </kroton-button>
        <div class="ml-auto flex flex-nowrap">
          <kroton-button (click)='loginClick()'>
            <fa-icon [icon]="faSignInAlt"></fa-icon>
            <span class="hidden sm:inline ml-2">Login</span>
          </kroton-button>
          <kroton-button (click)='loginClick()' krotonClasses="ml-2 bg-pink-200">
            <fa-icon [icon]="faUserPlus"></fa-icon>
            <span class="hidden sm:inline ml-2">Register new account</span>
          </kroton-button>
        </div>
      </nav>
    </div>
  `
})
export class UnauthorizedTopBarComponent {
  faSignInAlt = faSignInAlt;
  faUserPlus = faUserPlus

  constructor(private store: Store) {
  }

  loginClick(): void {
    this.store.dispatch(login())
  }

}
