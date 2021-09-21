import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  /* crearemos una variable de tipo Date para nuestro date-time */

  fechaNaci: Date = new Date();

  /*  */

  customPickerOptions;
  customDate;

  constructor() { }

  ngOnInit() {
    
    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        /* aqui resiviremos año mes y dia en la variable evento */
        handler: ( evento ) => {console.log('Clicked Save!');
                                console.log(evento);
                              }
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    }

  }

  /* creamos el ionChange */
  cambioFecha( event ){
   console.log('ionChange', event);
   /* aqui comvertimos la fecha iso a javascript */
   console.log('Date', new Date( event.detail.value ));
  }

}
