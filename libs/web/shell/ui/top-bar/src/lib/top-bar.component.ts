import { Component } from '@angular/core';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { logout } from '@kroton//web/shared/data-access/store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'kroton-top-bar',
  template: `
    <div class="w-full shadow-md bg-white fixed top-0">
      <nav class="kroton-max-width mx-auto py-2 px-2">
        <div class="flex justify-items-stretch">
          <kroton-button routerLink='/' krotonClasses="uppercase tracking-widest">
            kroton
          </kroton-button>
          <div class="ml-auto flex flex-nowrap">
            <kroton-button (click)='logout()'>
              <fa-icon [icon]="faSignOutAlt"></fa-icon>
              <span class="hidden sm:inline ml-2">Logout</span>
            </kroton-button>
          </div>
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
