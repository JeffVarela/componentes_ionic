import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('lista') lista: IonList; 

  /* aqui almacenamos los datos que recibamos */

  usuarios: Observable<any>;
  /* importaremos un toast controler para mostrar mensajes en pantalla */
  /* importamos el servicio que creamos con httpClient */
  constructor(private dataService: DataService,
               private toasCtrl: ToastController) { }

  ngOnInit() {
   this.usuarios = this.dataService.getUser()
      /* .subscribe( console.log ); */
  }

  /* la fucion del toast */

  async presentToast(message: string) {
    const toast = await this.toasCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  favorite(user){
   // console.log('favorite', user);
   this.presentToast('Agregado a favoritos!');
  this.lista.closeSlidingItems();
  }
  share(user){
   // console.log('share', user);
   this.presentToast('Compartido!');
  this.lista.closeSlidingItems();
  }
  borrar(user){
   // console.log('borrar', user);
   this.presentToast('Borrado!');
  this.lista.closeSlidingItems(); 
  }
  
}
