import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewFeatureComponent } from './new-feature.component';
import { RouterModule } from '@angular/router';
import { WebSharedButtonModule } from '@kroton/web/shared/ui/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule.forChild([
      {
        path: '',
        component: NewFeatureComponent
      }
    ]),
    WebSharedButtonModule
  ],
  declarations: [NewFeatureComponent]
})
export class NewFeatureModule {
}
