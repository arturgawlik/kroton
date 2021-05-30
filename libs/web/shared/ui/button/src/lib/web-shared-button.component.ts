import { Component, Input } from '@angular/core';

@Component({
  selector: 'kroton-button',
  template: `
    <button matRipple class="px-4 rounded border border-black" [class]="krotonClasses">
      <ng-content></ng-content>
    </button>
  `
})
export class WebSharedButtonComponent {
  @Input() krotonClasses: string;
}
