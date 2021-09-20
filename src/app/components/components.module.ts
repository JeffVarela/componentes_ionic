import { NgModule } from "@angular/core";   /* Este medulo lo hacemos manual por que lo genera como pagina */
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        HeaderComponent
    ],
    exports: [
        HeaderComponent
    ],
    imports:[
        CommonModule,
        IonicModule,
        FormsModule,
        RouterModule
    ]
})
export class ComponentsModule {}