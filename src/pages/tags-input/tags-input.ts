import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TagTokenInput } from '../tag-token-input/tag-token-input';
import { TagInput } from '../tag-input/tag-input';
/**
 * Generated class for the TagsInput page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tags-input',
  templateUrl: 'tags-input.html',
})
export class TagsInput {


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad TagsInput');
  }

  itemSelected(item: number) {
    console.log("Selected Item", item);
    if(item===1)   this.navCtrl.push(TagTokenInput);
    else this.navCtrl.push(TagInput);
  }

}
