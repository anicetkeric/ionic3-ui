import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TagInput page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tag-input',
  templateUrl: 'tag-input.html',
})
export class TagInput {
  items = ['TypeScript', 'Angular', 'Ionic'];
  items2 = ['TypeScript', 'Angular', 'Ionic'];
  items3 = ['TypeScript', 'Angular', 'Ionic'];
  items4 = ['TypeScript', 'Angular', 'Ionic'];
  items5 = ['TypeScript', 'Angular', 'Ionic'];
  items6 = ['TypeScript', 'Angular', 'Ionic'];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TagInput');
  }

tagStrVerify(str: string): boolean{
    return str !== 'ABC' && str.trim() !== '';
  }

  onChange(val){
    console.log(val)
  }

}
