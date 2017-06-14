import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ModalController} from 'ionic-angular';
import { Signature } from '../signature/signature';
/**
 * Generated class for the SignatureContent page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-signature-content',
  templateUrl: 'signature-content.html',
})
export class SignatureContent {

public signatureImage : any;

  constructor(public navCtrl: NavController, public navParams:NavParams, public modalController:ModalController) {
  this.signatureImage = navParams.get('signatureImage');;
  }

  openSignatureModel(){
    setTimeout(() => {
       let modal = this.modalController.create(Signature);
    modal.present();
    }, 300);
  }

}
