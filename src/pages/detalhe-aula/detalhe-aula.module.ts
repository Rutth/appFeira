import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalheAulaPage } from './detalhe-aula';

@NgModule({
  declarations: [
    DetalheAulaPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalheAulaPage),
  ],
})
export class DetalheAulaPageModule {}
