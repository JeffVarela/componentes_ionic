import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  /* arreglo de la interfaz Componentes para hacer una lista mas dinamica */
  componentes: Componente[] = [
    {
      icon: 'american-football-outline',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'bag-outline',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'sad-outline',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'keypad-outline',
      name: 'Botones y Routers',
      redirectTo: '/botones'
    },
    {
      icon: 'card-outline',
      name: 'Cards',
      redirectTo: '/card'
    },
    {
      icon: 'checkmark-done-circle-outline',
      name: 'checkbox',
      redirectTo: '/check'
    },
    {
      icon: 'calendar-number-outline',
      name: 'DateTime',
      redirectTo: '/date-time'
    },
    {
      icon: 'car-sport-outline',
      name: 'Fabs',
      redirectTo: '/fab'
    }
  ];

  constructor() {}

}

interface Componente{

  name: string;
  icon: string;
  redirectTo: string;

}