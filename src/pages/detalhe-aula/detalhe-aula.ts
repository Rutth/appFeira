import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalheAulaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe-aula',
  templateUrl: 'detalhe-aula.html',
})
export class DetalheAulaPage {
  curso: any

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.curso = this.navParams.get('itemSelecionado')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalheAulaPage');
  }

}
