import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignatureContent } from './signature-content';

@NgModule({
  declarations: [
    SignatureContent,
  ],
  imports: [
    IonicPageModule.forChild(SignatureContent),
  ],
  exports: [
    SignatureContent
  ]
})
export class SignatureContentModule {}
