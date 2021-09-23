import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverInfoComponent } from '../components/popover-info/popover-info.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {
/* inyectamos el popover */
  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  async mostrarPop(event){
    const popover = await this.popoverCtrl.create({
      component: PopoverInfoComponent,
      event: event,
      mode: 'ios',
     // backdropDismiss: false

    });

    await popover.present()

  }

}
