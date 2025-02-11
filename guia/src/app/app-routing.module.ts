import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'peruibe',
    loadChildren: () => import('./cidade/peruibe/peruibe.module').then( m => m.PeruibePageModule)
  },
  {
    path: 'itanhaem',
    loadChildren: () => import('./cidade/itanhaem/itanhaem.module').then( m => m.ItanhaemPageModule)
  },
  {
    path: 'guaruja',
    loadChildren: () => import('./cidade/guaruja/guaruja.module').then( m => m.GuarujaPageModule)
  },
  {
    path: 'santos',
    loadChildren: () => import('./cidade/santos/santos.module').then( m => m.SantosPageModule)
  },
  {
    path: 'mongagua',
    loadChildren: () => import('./cidade/mongagua/mongagua.module').then( m => m.MongaguaPageModule)
  },
  {
    path: 'saovicente',
    loadChildren: () => import('./cidade/saovicente/saovicente.module').then( m => m.SaovicentePageModule)
  },
  {
    path: 'praiagrande',
    loadChildren: () => import('./cidade/praiagrande/praiagrande.module').then( m => m.PraiagrandePageModule)
  },
  {
    path: 'cubatao',
    loadChildren: () => import('./cidade/cubatao/cubatao.module').then( m => m.CubataoPageModule)
  },
  {
    path: 'bertioga',
    loadChildren: () => import('./cidade/bertioga/bertioga.module').then( m => m.BertiogaPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
