import { NgModule } from '@angular/core';
import { FiltroPipe } from './filtro.pipe';


/* declaramos el filtroPipe y lo exportamos por que lo usaremos fuera  */

@NgModule({
  declarations: [FiltroPipe],
  exports:[FiltroPipe],
  
})
export class PipesModule { }
