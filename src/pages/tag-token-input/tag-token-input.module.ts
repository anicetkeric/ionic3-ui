import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TagTokenInput } from './tag-token-input';

@NgModule({
  declarations: [
    TagTokenInput,
  ],
  imports: [
    IonicPageModule.forChild(TagTokenInput),
  ],
  exports: [
    TagTokenInput
  ]
})
export class TagTokenInputModule {}
