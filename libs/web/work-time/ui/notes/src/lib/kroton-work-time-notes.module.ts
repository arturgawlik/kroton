import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KrotonWorkTimeNotesComponent } from './kroton-work-time-notes.component';
import { KrotonWorkTimeNoteEditorModule } from '@kroton/web/work-time/ui/note-editor';

@NgModule({
  imports: [CommonModule, KrotonWorkTimeNoteEditorModule],
  declarations: [KrotonWorkTimeNotesComponent],
  exports: [KrotonWorkTimeNotesComponent]
})
export class KrotonWorkTimeNotesModule {
}
