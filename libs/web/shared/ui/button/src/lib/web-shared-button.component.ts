import { Component, Input } from '@angular/core';

@Component({
  selector: 'kroton-button',
  template: `
    <button matRipple [disabled]="krotonDisabled" class="px-4 rounded border border-black" [class]="krotonClasses">
      <ng-content></ng-content>
<!--      <div-->
<!--        *ngIf="krotonSelected"-->
<!--        style="height: 2px;"-->
<!--        class="bg-red-500 rounded"-->
<!--      ></div>-->
    </button>

  `
})
export class WebSharedButtonComponent {
  @Input() krotonClasses: string;
  @Input() krotonDisabled = false;
  // @Input() krotonSelected = false;
}
