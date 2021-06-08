import { Component } from '@angular/core';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { logout } from '@kroton//web/shared/data-access/store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'kroton-top-bar',
  template: `
    <div class="w-full shadow-md bg-white fixed t op-0">
      <nav class="kroton-max-width mx-auto flex py-2 px-2 items-center">
        <kroton-button routerLink='/' krotonClasses="uppercase tracking-widest border-none">
          kroton
        </kroton-button>
        <div class="ml-auto flex flex-nowrap">
          <kroton-button (click)='logout()'>
            <span class="hidden sm:inline">Logout</span>
            <fa-icon class="sm:hidden" [icon]="faSignOutAlt"></fa-icon>
          </kroton-button>
        </div>
      </nav>
    </div>
  `
})
export class TopBarComponent {
  faSignOutAlt = faSignOutAlt;

  constructor(private store: Store) {
  }

  logout() {
    this.store.dispatch(logout())
  }
}
