import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Signature } from './signature';

@NgModule({
  declarations: [
    Signature,
  ],
  imports: [
    IonicPageModule.forChild(Signature),
  ],
  exports: [
    Signature
  ]
})
export class SignatureModule {}
