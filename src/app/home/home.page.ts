import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Componente } from '../interfaces/interfaces';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  /* arreglo de la interfaz Componentes para hacer una lista mas dinamica 
     pero lo movimos a menu.json y lo llamamos en servicion*/
  componentes: Observable<Componente[]>;

/* inyectamos el menu controller */
  constructor(private menuCtrl: MenuController,
              private dataService: DataService) {}

  ngOnInit() {

    this.componentes = this.dataService.getOpciones();
    
  }

  toggleMenu(){
    /* togle es que si el menu esta abierto que se oculte y si esta oculto que los muestre */
  this.menuCtrl.toggle();
  }

}

