import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Settings } from '../../providers/settings';
/**
 * Generated class for the DynamicTheme page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-dynamic-theme',
  templateUrl: 'dynamic-theme.html',
})
export class DynamicTheme {
selectedTheme: String;

  constructor(public navCtrl: NavController, private settings: Settings) {
    this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);
  }

  toggleAppTheme() {
    if (this.selectedTheme === 'dark-theme') {
      this.settings.setActiveTheme('light-theme');
    } else {
      this.settings.setActiveTheme('dark-theme');
    }
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad DynamicTheme');
  }

}
