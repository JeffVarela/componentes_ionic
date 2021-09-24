import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any[],
            texto: string,
            columna: string): any {
    //console.log(arreglo);

    if (texto === '') {
       return arreglo;
    }

    /* pasamos el texto a minuscula */

    /* del item que tomamos del arreglo tomamos la columna y esa columna aplicara el filtro */

    texto = texto.toLocaleLowerCase();

    return arreglo.filter(item =>{
      return item[columna].toLowerCase().includes( texto );
    })

  }

}
