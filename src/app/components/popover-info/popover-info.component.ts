import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-info',
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss'],
})
export class PopoverInfoComponent implements OnInit {

  item = Array(40);

  constructor(private  popoverCtrl : PopoverController) { }

  ngOnInit() {}

  /* en item recivimos el valor que esta colocando la persona */

  onClick(valor: number){

    console.log('item', valor);

    this.popoverCtrl.dismiss({
      item: valor
    });
  }

}
