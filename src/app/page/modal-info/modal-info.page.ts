import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  /* resivimos los componentProps del modalpage */

  @Input() nombre;
  @Input() pais;


  /* inyectamos el modal controler */

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    
  }

  salirSinArgumentos(){
    this.modalCtrl.dismiss();
  }


  salirConArgumentos(){
    this.modalCtrl.dismiss({
      nombre: 'José',
      pais: 'Honduras'
    });
  }

}
