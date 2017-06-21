import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccordionList } from './accordion-list';

@NgModule({
  declarations: [
    AccordionList,
  ],
  imports: [
    IonicPageModule.forChild(AccordionList),
  ],
  exports: [
    AccordionList
  ]
})
export class AccordionListModule {}
