import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reoder',
  templateUrl: './list-reoder.page.html',
  styleUrls: ['./list-reoder.page.scss'],
})
export class ListReoderPage implements OnInit {

  personajes = ['batman', 'acuaman', 'mujer maravilla', 'flash', 'spiderman']

  constructor() { }

  ngOnInit() {
  }

  doReorder( event ){

   //console.log(event);
   
   /* modifica los elementos del arreglo */
   const itemMover = this.personajes.splice(event.detail.from, 1)[0];
   this.personajes.splice(event.detail.to,0, itemMover);

   event.detail.complete();  /* para que no se quede pegado al arrastrar */

  }

  /* mostrar que el arreglo a sido modificado */
  onClick(){
   console.log(this.personajes);
  }

}
