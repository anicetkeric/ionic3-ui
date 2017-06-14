import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TagInput } from './tag-input';

@NgModule({
  declarations: [
    TagInput,
  ],
  imports: [
    IonicPageModule.forChild(TagInput),
  ],
  exports: [
    TagInput
  ]
})
export class TagInputModule {}
