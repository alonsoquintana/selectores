import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaisesRoutingModule } from './paises-routing.module';
import { PaisesComponent } from './services/paises/paises.component';
import { SelectorPagesComponent } from './pages/selector-pages/selector-pages.component';


@NgModule({
  declarations: [
    SelectorPagesComponent,
    PaisesComponent,
    SelectorPagesComponent
  ],
  imports: [
    CommonModule,
    PaisesRoutingModule
  ]
})
export class PaisesModule { }
