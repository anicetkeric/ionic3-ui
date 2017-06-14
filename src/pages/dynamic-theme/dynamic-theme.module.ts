import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DynamicTheme } from './dynamic-theme';

@NgModule({
  declarations: [
    DynamicTheme,
  ],
  imports: [
    IonicPageModule.forChild(DynamicTheme),
  ],
  exports: [
    DynamicTheme
  ]
})
export class DynamicThemeModule {}
