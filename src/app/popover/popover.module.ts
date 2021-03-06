import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopoverPageRoutingModule } from './popover-routing.module';

import { PopoverPage } from './popover.page';
import { PopoverInfoComponent } from '../components/popover-info/popover-info.component';
import { ComponentsModule } from '../components/components.module';

/* importamos los elementos que se van a crear de forma dinamica el popoverInfoPage que se encuentra en componentsModule */

@NgModule({

  entryComponents: [
    PopoverInfoComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopoverPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PopoverPage]
})
export class PopoverPageModule {}
