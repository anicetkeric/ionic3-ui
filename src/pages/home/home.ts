import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { DynamicTheme } from '../dynamic-theme/dynamic-theme';
// import { TagsInput } from '../tags-input/tags-input';
// import { Rating } from '../rating/rating';
// import { SignatureContent } from '../signature-content/signature-content';
// import { AccordionList } from '../accordion-list/accordion-list';


/**
 * Generated class for the Home page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class Home {

 tudo: void;
  lista: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

     this.tudo = this.getList();
      console.log(this.lista);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Home');
  }

  doGoToPage(p:any) {
   // alert(p);
    this.navCtrl.push(p);
  }

 getList() {
      this.lista = [
  {
    "title": "Ionic Components",
    "items": [
      {
        "name": "Tags Input",
        "value": "TagsInput"
      },
      {
        "name": "Ionic Rating",
        "value": "Rating"
      },
      {
        "name": "Signature Pad ",
        "value": "SignatureContent"
      },
      {
        "name": "Accordion List",
        "value": "AccordionList"
      }
    ]
  },
  {
    "title": "Theming",
    "items": [
      {
        "name": "Dynamic Theming",
        "value": "TagInput"
      }
    ]
  }
]
    }

}
