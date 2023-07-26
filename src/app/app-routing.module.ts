import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./features/inicio/inicio.module')
    .then(m => m.InicioModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./features/product/product.module')
    .then(m => m.ProductModule)
  },
  {
    path: '**',
    redirectTo: 'inicio'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
