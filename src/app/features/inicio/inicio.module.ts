import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { InicioPagesComponent } from './pages/inicio-pages/inicio-pages.component';
import { InicioRoutingModule } from './inicio-routing.module';

@NgModule({
    declarations: [
        InicioPagesComponent
    ],
    imports: [
        CommonModule,
        InicioRoutingModule,
        SharedModule
    ]
})

export class InicioModule {}