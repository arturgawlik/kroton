import { Component } from '@angular/core';

@Component({
  selector: 'kroton-new-feature',
  template: `
    <div class="flex flex-col mt-6 p-2 items-center sm:items-start">
      <p class="text-2xl text-justify sm:text-left">You can request for new feature by creating new or upvote existing one issue on github.</p>
      <kroton-button
        krotonHref="https://github.com/arturgawlik/kroton/issues/new"
        class="mt-5 sm:mt-2"
      >
        <fa-icon [icon]=""></fa-icon>
        Create New Issue
      </kroton-button>
    </div>
  `
})
export class NewFeatureComponent {
}
