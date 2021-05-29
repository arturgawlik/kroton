import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnauthorizedTopBarComponent } from './unauthorized-top-bar.component';
import {MatRippleModule} from '@angular/material/core';

@NgModule({
  imports: [CommonModule, MatRippleModule],
  declarations: [UnauthorizedTopBarComponent],
  exports: [UnauthorizedTopBarComponent]
})
export class UnauthorizedTopBarModule {}
