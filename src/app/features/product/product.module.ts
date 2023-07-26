import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductPagesComponent } from './pages/product-pages/product-pages.component';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
    declarations: [
        ProductPagesComponent
    ],
    imports: [
        CommonModule,
        ProductRoutingModule,
        SharedModule
    ]
})

export class ProductModule {}