import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetalheAulaPage } from '../detalhe-aula/detalhe-aula'
/**
 * Generated class for the ListaAulaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare function require(url: string);

@IonicPage()
@Component({
  selector: 'page-lista-aula',
  templateUrl: 'lista-aula.html',
})

export class ListaAulaPage {
  nomeRecebido: string
  
  public jsonLista: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nomeRecebido = this.navParams.get('nomePage')

    this.jsonLista = require('../../assets/data/aula.json');
    console.log("res: " + this.jsonLista)

    console.log("nome recebido: " + this.nomeRecebido)
    
  }
  
  itemSelecionado(item){
    this.navCtrl.push( DetalheAulaPage, {itemSelecionado: item})
  }

}
