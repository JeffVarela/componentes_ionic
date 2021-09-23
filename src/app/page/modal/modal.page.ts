import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { modalController } from '@ionic/core';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  /* inyectamos el modal controller */
  constructor(private modalCrl:ModalController) { }

  ngOnInit() {
  }

/*para que esto funcione agregamos como entryComponents la modal infopage y su modulo al modalModule */

  async abrirModal() {
    const modal = await this.modalCrl.create({
      component: ModalInfoPage,
      componentProps: {
        nombre: 'Jefferson',
        pais: 'Nicaragua'
      }

    });
    /* return */ await modal.present();


    /* modal.onDidDismiss(); es una promesa que esta escuchando cuando el modal se cierra, lo que sea que venga dentro del dismiss los guardara en data */

    const { data } = await modal.onDidDismiss();
    console.log('retorno del modal',data);
  }

}
