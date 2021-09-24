import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.page.html',
  styleUrls: ['./progressbar.page.scss'],
})
export class ProgressbarPage implements OnInit {
  
  procentaje = 0.05;

  constructor() { }

  ngOnInit() {
  }

  cambioRango(event){
    console.log(event);
    this.procentaje = event.detail.value / 100; /* por que tenemos valores entre 1-100 */
  }

}
