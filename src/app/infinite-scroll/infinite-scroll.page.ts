import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  /* cuando necesitamos optener un elemento de html, en este caso al infinite scroll, para desabilitarlo en setTimeout */

  @ViewChild(IonInfiniteScroll) infinitescroll: IonInfiniteScroll;

  /* para rellenar los campos */
  data: any[] = Array(20);

  constructor() { }

  ngOnInit() {
  }

  /* creamos el load data para el infinite scroll */

  loadData(event){
  console.log('cargando siguientes.....');
  
  /* simulamos una carga asincrona en 1 segundo */

  setTimeout(() => {
   
    /* cuando data sea mayor a 50 que detenga el infinite scroll */
    if (this.data.length > 50) {
      event.target.complete();
      this.infinitescroll.disabled = true;
      return; /* para que no siga ejecutando la funcion */
    }

    const nuevoArray = Array(20);
    this.data.push(...nuevoArray);
    event.target.complete(); /* cancelamos el infinite scroll cuando haya terminado de cargar los datos */
  }, 1000);
  
  }

}
