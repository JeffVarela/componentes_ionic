import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  /* agregamos este path para evitar que cargue la ruta tabs que dejamos vacia */
  { 
   path: '',
   redirectTo: 'contact' 
  },
  {
    path: '',
    component: TabsPage,

    /* agregamos las rutas */

    children: [
      {

        path: 'accout',
        loadChildren: () => import('../../avatar/avatar.module').then(m => m.AvatarPageModule)

      },
      {

        path: 'contact',
        loadChildren: () => import('../../list/list.module').then(m => m.ListPageModule)

      },
      {

        path: 'settings',
        loadChildren: () => import('../../infinite-scroll/infinite-scroll.module').then(m => m.InfiniteScrollPageModule)

      }
    ]


  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
