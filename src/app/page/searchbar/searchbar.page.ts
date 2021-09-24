import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  album: any[] = [];
  /* capturamos el valor del searchbar */

  textoBuscar = '';

  constructor(private dataservise: DataService) { }

  /* guardamos el album la data obtenida de getAlbunes */

  ngOnInit() {
    this.dataservise.getAlbunes()
    .subscribe(album => {
      console.log(album);
      this.album=album;
    })
  }

  buscar(event){
    //console.log(event); 
    this.textoBuscar = event.detail.value;
  }

}
