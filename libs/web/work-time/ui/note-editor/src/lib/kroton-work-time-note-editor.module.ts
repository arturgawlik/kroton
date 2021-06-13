import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KrotonWorkTimeNoteEditorComponent } from './kroton-work-time-note-editor.component';
import { WebSharedButtonModule } from '@kroton/web/shared/ui/button';

@NgModule({
  imports: [CommonModule, WebSharedButtonModule],
  declarations: [KrotonWorkTimeNoteEditorComponent],
  exports: [KrotonWorkTimeNoteEditorComponent]
})
export class KrotonWorkTimeNoteEditorModule {
}
