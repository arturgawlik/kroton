import { Component } from '@angular/core';
import { faClock, faTasks, faFire, faUserFriends } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'kroton-module-menu',
  styles: [`
    .bg-pattern {
      background-image: url('/assets/patterns2.svg');
    }
  `],
  template: `
    <div class="flex flex-col sm:flex-row mt-14 kroton-max-width mx-auto p-4 justify-center sm:justify-start bg-blue-400 rounded shadow bg-pattern">
      <kroton-button routerLink='work-time' krotonClasses="p-1 bg-green-400 text-white w-full sm:w-36 my-1 sm:m-1">
        <fa-icon [icon]="faClock"></fa-icon>
        <span class="ml-2">Work Time</span>
      </kroton-button>
      <kroton-button routerLink='tasks' krotonClasses="p-1 bg-pink-400 text-white w-full sm:w-36 my-1 sm:m-1 ">
        <fa-icon [icon]="faTasks"></fa-icon>
        <span class="ml-2">Tasks</span>
      </kroton-button>
      <kroton-button routerLink='team' krotonClasses="p-1 bg-red-400 text-white w-full sm:w-36 my-1 sm:m-1">
        <fa-icon [icon]="faUserFriends"></fa-icon>
        <span class="ml-2">Team</span>
      </kroton-button>
      <div class="sm:ml-auto">
        <kroton-button routerLink='new-feature' krotonClasses="p-1 text-white border-white bg-blue-400 w-full sm:w-auto my-1 sm:m-1">
          <fa-icon [icon]="faFire"></fa-icon>
          <span class="ml-2">Request for new feature</span>
        </kroton-button>
      </div>
    </div>
  `
})
export class ModuleMenuComponent {
  faClock = faClock;
  faTasks = faTasks;
  faUserFriends = faUserFriends;
  faFire = faFire;
}
