import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  /* para capturar el nombre */
  nombre: string;

  usuario = {
    email: '',
    password: '',
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmiteTemplate(){
    console.log('onSubmiteTemplate se esta ejecutando');
    console.log(this.usuario);
  }

}
