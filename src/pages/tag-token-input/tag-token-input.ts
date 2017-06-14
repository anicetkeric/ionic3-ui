import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TagTokenInput page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tag-token-input',
  templateUrl: 'tag-token-input.html',
})
export class TagTokenInput {

 topics = [];
  name: string;
  talks = [];
  preparedTags = [
    '#Ionic',
    '#Angular',
    '#Angular2',
    '#Javascript',
    '#Mobile',
    '#Hybrid',
    '#CrossPlatform',
    '#Html',
    '#Css',
    '#TypeScript',
    '#Cli'

  ]


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
   addTalk() {
    this.talks.push({name: this.name, topics: this.topics});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TagTokenInput');
  }

}
