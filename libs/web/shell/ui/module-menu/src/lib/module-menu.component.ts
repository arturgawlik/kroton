import { Component } from '@angular/core';
import { faClock, faTasks, faFire, faUserFriends } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'kroton-module-menu',
  template: `
    <div class="flex flex-wrap bg-white mt-14 kroton-max-width mx-auto p-1 justify-center sm:justify-start bg-blue-400 rounded shadow">
      <kroton-button krotonClasses="m-2 p-1 bg-green-400 text-white w-36 ">
        <fa-icon [icon]="faClock"></fa-icon>
        <span class="ml-2">Work Time</span>
      </kroton-button>
      <kroton-button krotonDisabled="true" krotonClasses="m-2 p-1 bg-pink-400 cursor-not-allowed text-white w-36">
        <fa-icon [icon]="faTasks"></fa-icon>
        <span class="ml-2">Tasks</span>
      </kroton-button>
      <kroton-button krotonDisabled="true" krotonClasses="m-2 p-1 bg-red-400 cursor-not-allowed text-white w-36">
        <fa-icon [icon]="faUserFriends"></fa-icon>
        <span class="ml-2">Team</span>
      </kroton-button>
      <div class="lg:ml-auto">
        <kroton-button krotonClasses="m-2 p-1 text-white border-white">
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
