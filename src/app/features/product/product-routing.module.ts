import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPagesComponent } from './pages/product-pages/product-pages.component';

const routes: Routes = [
    { path: '', component: ProductPagesComponent},
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProductRoutingModule {}