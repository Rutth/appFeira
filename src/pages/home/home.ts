import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import {ListaAulaPage} from '../lista-aula/lista-aula';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  nome: string
  idade: string

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {
    
  }

  confirmar(){
    let alert = this.alertCtrl.create({
      title: 'Confirmando',
      message: 'Olá, ' + this.nome + ". Você tem " + this.idade ,
      buttons: [
        {
          text: 'Ok',
          handler: () =>{
            console.log("Ok!")
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log("Cancelado!")
          }
        }
      ]   
    })
    alert.present()
  }

  proximaPagina(){
    this.navCtrl.push(ListaAulaPage, {nomePage: this.nome})
  }

}
