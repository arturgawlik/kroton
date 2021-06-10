import { Component, Input } from '@angular/core';

@Component({
  selector: 'kroton-button',
  template: `
    <button
      *ngIf="!krotonHref"
      matRipple
      [disabled]="krotonDisabled"
      class="px-4 rounded border border-black"
      [class]="krotonClasses"
    >
      <ng-container *ngTemplateOutlet="contentTpl"></ng-container>
    </button>
    <a
      *ngIf="krotonHref"
      [href]="krotonHref"
      [target]="krotonHrefTarget"
      matRipple
      class="px-4 rounded border border-black"
      [class]="krotonClasses"
    >
      <ng-container *ngTemplateOutlet="contentTpl"></ng-container>
    </a>
    <ng-template #contentTpl><ng-content></ng-content></ng-template>
  `
})
export class WebSharedButtonComponent {
  @Input() krotonClasses: string;
  @Input() krotonDisabled = false;
  @Input() krotonHref: string = null;
  @Input() krotonHrefTarget = '_blank';
}
