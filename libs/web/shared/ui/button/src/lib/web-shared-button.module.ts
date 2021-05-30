import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebSharedButtonComponent } from './web-shared-button.component';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  imports: [CommonModule, MatRippleModule],
  declarations: [WebSharedButtonComponent],
  exports: [WebSharedButtonComponent]
})
export class WebSharedButtonModule {}
