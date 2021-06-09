import { Component } from '@angular/core';
import { faClock, faTasks, faFire, faUserFriends } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'kroton-module-menu',
  template: `
    <div class="flex flex-col sm:flex-row bg-white mt-14 kroton-max-width mx-auto p-4 justify-center sm:justify-start bg-blue-400 rounded shadow">
      <kroton-button krotonClasses="p-1 bg-green-400 text-white w-full sm:w-36 my-1 sm:m-1">
        <fa-icon [icon]="faClock"></fa-icon>
        <span class="ml-2">Work Time</span>
      </kroton-button>
      <kroton-button krotonDisabled="true" krotonClasses="p-1 bg-pink-400 cursor-not-allowed text-white w-full sm:w-36 my-1 sm:m-1">
        <fa-icon [icon]="faTasks"></fa-icon>
        <span class="ml-2">Tasks</span>
      </kroton-button>
      <kroton-button krotonDisabled="true" krotonClasses="p-1 bg-red-400 cursor-not-allowed text-white w-full sm:w-36 my-1 sm:m-1">
        <fa-icon [icon]="faUserFriends"></fa-icon>
        <span class="ml-2">Team</span>
      </kroton-button>
      <div class="sm:ml-auto">
        <kroton-button krotonClasses="p-1 text-white border-white w-full sm:w-auto my-1 sm:m-1">
          <fa-icon [icon]="faFire"></fa-icon>
          <span class="ml-2">Ask for new feature</span>
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