import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {


  /* crearemos un arreglo para el ion checkbox */

  data = [
    {
     name: 'primary',
     selected: false
    },
    {
      name: 'secondary',
      selected: false
     },
     {
      name: 'tertiary',
      selected: false
     },
     {
      name: 'success',
      selected: false
     }
  ]

  constructor() { }

  ngOnInit() {
  }

  /* crearemos un metodo para recibir el valor del checkbox */
  onClick( check ){
   console.log(check);
  }

}
