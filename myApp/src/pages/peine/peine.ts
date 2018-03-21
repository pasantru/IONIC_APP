import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PeinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-peine',
  templateUrl: 'peine.html',
})
export class PeinePage {

  superhero: string;
  publisher: string;
  alterego: string;
  first_apparence: string;
  characters: string;
  pictures: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.superhero = this.navParams.get('superhero');
    this.publisher = this.navParams.get('publisher');
    this.alterego = this.navParams.get('alterego');
    this.first_apparence = this.navParams.get('first_apparence');
    this.characters = this.navParams.get('characters');
    this.pictures = this.navParams.get('pictures');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PeinePage');
  }

}
