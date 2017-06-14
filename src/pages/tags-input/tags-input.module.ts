import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TagsInput } from './tags-input';

@NgModule({
  declarations: [
    TagsInput,
  ],
  imports: [
    IonicPageModule.forChild(TagsInput),
  ],
  exports: [
    TagsInput
  ]
})
export class TagsInputModule {}
