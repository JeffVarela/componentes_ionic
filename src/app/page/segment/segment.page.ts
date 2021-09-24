import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  /* no hacemos la referencia # en el html por que solo tenemos un ionSegment */
 @ViewChild(IonSegment) segment: IonSegment;

 superHeroes: Observable<any>;

 /* para el filtro */

 publisher= '';

  constructor(private dataService: DataService) { }

  /* haremos que al entrar a la pagina el primer elemento seleccionado se el segmento todos */
  ngOnInit() {
    //setTimeout(() => {
      //}, 500);

     this.superHeroes = this.dataService.getHeroes();
    }
    
    ionViewWillEnter(){
      
      this.segment.value = 'todos';
  }

  segmentChanged(event){
    const valorSegmento = event.detail.value;

    if (valorSegmento === 'todos') {
      this.publisher = '';
      return 
    }

    this.publisher = valorSegmento;

    console.log(valorSegmento);
  }

}
