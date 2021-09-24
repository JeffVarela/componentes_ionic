import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Componente } from '../interfaces/interfaces';

/* importamos el delay para probar el skeleton text */
import { delay } from 'rxjs/Operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient ) { }

  getUser(){
  return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getOpciones(){
    /* especificamos que esto retorne un arreglo de Componente(interfaz) */
    return this.http.get<Componente[]>('/assets/data/menu.json');
    }

    /* para el searchbar */
getAlbunes(){
  return this.http.get<any>('https://jsonplaceholder.typicode.com/albums')
}

getHeroes(){
  return this.http.get('/assets/data/superheroes.json')
  .pipe(delay(1500)); /* hacemos un delay de 1500 ms */
  }

}
