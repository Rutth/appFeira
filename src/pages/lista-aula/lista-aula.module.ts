import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaAulaPage } from './lista-aula';

@NgModule({
  declarations: [
    ListaAulaPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaAulaPage),
  ],
})
export class ListaAulaPageModule {}
